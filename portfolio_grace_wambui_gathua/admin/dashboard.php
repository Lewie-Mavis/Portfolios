<?php
session_start();
require_once '../config/db_config.php';

// Check if logged in
if (!isset($_SESSION['admin_logged_in']) || $_SESSION['admin_logged_in'] !== true) {
    header("Location: login.php");
    exit();
}

// Handle post deletion
if (isset($_GET['delete']) && is_numeric($_GET['delete'])) {
    $id = $_GET['delete'];
    $stmt = $conn->prepare("DELETE FROM blog_posts WHERE id = ?");
    $stmt->bind_param("i", $id);
    if ($stmt->execute()) {
        header("Location: dashboard.php?msg=deleted");
        exit();
    }
    $stmt->close();
}

// Fetch all blog posts - ADDED slug to the query
$posts_query = "SELECT id, title, slug, category, status, views, created_at FROM blog_posts ORDER BY created_at DESC";
$posts_result = $conn->query($posts_query);
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Dashboard - Grace Wambui Gathua</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        body {
            font-family: 'Inter', sans-serif;
            background: #f5f5f5;
        }
        .admin-header {
            background: linear-gradient(135deg, #200F3B 0%, #161E85 100%);
            color: white;
            padding: 20px 0;
            position: sticky;
            top: 0;
            z-index: 100;
        }
        .admin-container {
            max-width: 1400px;
            margin: 0 auto;
            padding: 0 30px;
        }
        .header-content {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .logo h2 {
            color: #D1A52A;
        }
        .logo p {
            font-size: 0.8rem;
            opacity: 0.8;
        }
        .user-info {
            display: flex;
            align-items: center;
            gap: 20px;
        }
        .btn-logout {
            background: rgba(209, 165, 42, 0.2);
            border: 1px solid #D1A52A;
            padding: 8px 20px;
            border-radius: 30px;
            color: #D1A52A;
            text-decoration: none;
            transition: all 0.3s;
        }
        .btn-logout:hover {
            background: #D1A52A;
            color: #200F3B;
        }
        .main-content {
            padding: 40px 0;
        }
        .action-bar {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 30px;
            flex-wrap: wrap;
            gap: 15px;
        }
        .btn-primary {
            background: #D1A52A;
            color: #200F3B;
            padding: 12px 25px;
            border: none;
            border-radius: 30px;
            text-decoration: none;
            font-weight: 600;
            display: inline-flex;
            align-items: center;
            gap: 8px;
            transition: all 0.3s;
        }
        .btn-primary:hover {
            background: #FFD700;
            transform: translateY(-2px);
        }
        .stats-cards {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 20px;
            margin-bottom: 40px;
        }
        .stat-card {
            background: white;
            padding: 25px;
            border-radius: 20px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.05);
            text-align: center;
        }
        .stat-card i {
            font-size: 2rem;
            color: #D1A52A;
            margin-bottom: 10px;
        }
        .stat-card .number {
            font-size: 2rem;
            font-weight: 700;
            color: #200F3B;
        }
        .posts-table {
            background: white;
            border-radius: 20px;
            overflow: hidden;
            box-shadow: 0 5px 15px rgba(0,0,0,0.05);
        }
        table {
            width: 100%;
            border-collapse: collapse;
        }
        th, td {
            padding: 15px 20px;
            text-align: left;
            border-bottom: 1px solid #eee;
        }
        th {
            background: #F8F9FC;
            color: #200F3B;
            font-weight: 600;
        }
        .status-badge {
            display: inline-block;
            padding: 4px 12px;
            border-radius: 20px;
            font-size: 0.75rem;
            font-weight: 600;
        }
        .status-published {
            background: #d4edda;
            color: #155724;
        }
        .status-draft {
            background: #fff3cd;
            color: #856404;
        }
        .action-buttons {
            display: flex;
            gap: 10px;
        }
        .action-buttons a {
            color: #666;
            text-decoration: none;
            transition: color 0.3s;
        }
        .action-buttons a:hover {
            color: #D1A52A;
        }
        .delete-btn {
            color: #dc3545 !important;
        }
        .alert {
            padding: 15px 20px;
            border-radius: 12px;
            margin-bottom: 20px;
        }
        .alert-success {
            background: #d4edda;
            color: #155724;
            border-left: 4px solid #28a745;
        }
        @media (max-width: 768px) {
            .admin-container {
                padding: 0 20px;
            }
            th, td {
                padding: 10px;
                font-size: 0.85rem;
            }
            .action-buttons {
                flex-direction: column;
                gap: 5px;
            }
        }
    </style>
</head>
<body>
    <header class="admin-header">
        <div class="admin-container">
            <div class="header-content">
                <div class="logo">
                    <h2>Grace Wambui Gathua</h2>
                    <p>Blog Management Dashboard</p>
                </div>
                <div class="user-info">
                    <span><i class="fas fa-user"></i> <?php echo htmlspecialchars($_SESSION['admin_username']); ?></span>
                    <a href="logout.php" class="btn-logout"><i class="fas fa-sign-out-alt"></i> Logout</a>
                </div>
            </div>
        </div>
    </header>

    <main class="main-content">
        <div class="admin-container">
            <?php if (isset($_GET['msg']) && $_GET['msg'] == 'deleted'): ?>
                <div class="alert alert-success">
                    <i class="fas fa-check-circle"></i> Post deleted successfully!
                </div>
            <?php endif; ?>
            
            <div class="action-bar">
                <h1>Blog Posts</h1>
                <a href="new-post.php" class="btn-primary"><i class="fas fa-plus"></i> New Post</a>
            </div>
            
            <div class="stats-cards">
                <div class="stat-card">
                    <i class="fas fa-newspaper"></i>
                    <div class="number"><?php echo $posts_result->num_rows; ?></div>
                    <p>Total Posts</p>
                </div>
                <div class="stat-card">
                    <i class="fas fa-eye"></i>
                    <div class="number">
                        <?php 
                        $views_query = "SELECT SUM(views) as total FROM blog_posts";
                        $views_result = $conn->query($views_query);
                        $views = $views_result->fetch_assoc();
                        echo number_format($views['total'] ?? 0);
                        ?>
                    </div>
                    <p>Total Views</p>
                </div>
            </div>
            
            <div class="posts-table">
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Category</th>
                            <th>Status</th>
                            <th>Views</th>
                            <th>Created</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <?php 
                        // Reset pointer to beginning
                        if ($posts_result && $posts_result->num_rows > 0) {
                            $posts_result->data_seek(0);
                            while ($post = $posts_result->fetch_assoc()): 
                        ?>
                        <tr>
                            <td><?php echo $post['id']; ?></td>
                            <td><?php echo htmlspecialchars($post['title']); ?></td>
                            <td><?php echo htmlspecialchars($post['category']); ?></td>
                            <td>
                                <span class="status-badge status-<?php echo $post['status']; ?>">
                                    <?php echo ucfirst($post['status']); ?>
                                </span>
                            </td>
                            <td><?php echo number_format($post['views']); ?></td>
                            <td><?php echo date('M d, Y', strtotime($post['created_at'])); ?></td>
                            <td class="action-buttons">
                                <a href="edit-post.php?id=<?php echo $post['id']; ?>"><i class="fas fa-edit"></i> Edit</a>
                                <a href="dashboard.php?delete=<?php echo $post['id']; ?>" class="delete-btn" onclick="return confirm('Are you sure you want to delete this post?')"><i class="fas fa-trash"></i> Delete</a>
                                <?php if (isset($post['slug']) && !empty($post['slug']) && $post['status'] == 'published'): ?>
                                    <a href="../single-blog.php?slug=<?php echo urlencode($post['slug']); ?>" target="_blank"><i class="fas fa-eye"></i> View</a>
                                <?php else: ?>
                                    <span style="color: #999;"><i class="fas fa-eye-slash"></i> Draft</span>
                                <?php endif; ?>
                            </td>
                        </tr>
                        <?php 
                            endwhile;
                        } else {
                            echo '<tr><td colspan="7" style="text-align: center; padding: 40px;">No blog posts yet. <a href="new-post.php">Create your first post</a></td></tr>';
                        }
                        ?>
                    </tbody>
                </table>
            </div>
        </div>
    </main>
</body>
</html>