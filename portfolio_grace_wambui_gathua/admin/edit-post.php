<?php
session_start();
require_once '../config/db_config.php';

// Check if logged in
if (!isset($_SESSION['admin_logged_in']) || $_SESSION['admin_logged_in'] !== true) {
    header("Location: login.php");
    exit();
}

$error = '';
$success = '';

// Get post ID
$id = isset($_GET['id']) ? (int)$_GET['id'] : 0;

// Fetch post data
$stmt = $conn->prepare("SELECT * FROM blog_posts WHERE id = ?");
$stmt->bind_param("i", $id);
$stmt->execute();
$result = $stmt->get_result();
$post = $result->fetch_assoc();

if (!$post) {
    header("Location: dashboard.php");
    exit();
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $title = trim($_POST['title']);
    $category = trim($_POST['category']);
    $content = trim($_POST['content']);
    $excerpt = trim($_POST['excerpt']);
    $image_url = trim($_POST['image_url']);
    $status = $_POST['status'];
    
    if (!empty($title) && !empty($category) && !empty($content)) {
        $update_stmt = $conn->prepare("UPDATE blog_posts SET title = ?, category = ?, content = ?, excerpt = ?, image_url = ?, status = ? WHERE id = ?");
        $update_stmt->bind_param("ssssssi", $title, $category, $content, $excerpt, $image_url, $status, $id);
        
        if ($update_stmt->execute()) {
            $success = "Post updated successfully!";
            // Refresh post data
            $stmt = $conn->prepare("SELECT * FROM blog_posts WHERE id = ?");
            $stmt->bind_param("i", $id);
            $stmt->execute();
            $result = $stmt->get_result();
            $post = $result->fetch_assoc();
        } else {
            $error = "Error updating post: " . $conn->error;
        }
        $update_stmt->close();
    } else {
        $error = "Please fill in all required fields.";
    }
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Edit Post - Admin Dashboard</title>
	
	  <!-- Favicon & App Icons -->
  <link rel="icon" type="image/png" href="images/icon.png">
  <link rel="apple-touch-icon" sizes="180x180" href="images/images/icon.png">
  <link rel="icon" type="image/png" sizes="32x32" href="images/images/icon.png">
  <link rel="icon" type="image/png" sizes="16x16" href="images/images/icon.png">
  <link rel="manifest" href="site.webmanifest">
  
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
        }
        .admin-container {
            max-width: 1200px;
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
        .btn-back {
            background: rgba(209, 165, 42, 0.2);
            border: 1px solid #D1A52A;
            padding: 8px 20px;
            border-radius: 30px;
            color: #D1A52A;
            text-decoration: none;
        }
        .main-content {
            padding: 40px 0;
        }
        .form-container {
            background: white;
            border-radius: 20px;
            padding: 35px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.05);
        }
        .form-group {
            margin-bottom: 25px;
        }
        .form-group label {
            display: block;
            margin-bottom: 8px;
            font-weight: 600;
            color: #200F3B;
        }
        .form-group input, 
        .form-group select, 
        .form-group textarea {
            width: 100%;
            padding: 12px 15px;
            border: 1px solid #ddd;
            border-radius: 12px;
            font-family: 'Inter', sans-serif;
            font-size: 0.95rem;
        }
        .form-group input:focus, 
        .form-group select:focus, 
        .form-group textarea:focus {
            outline: none;
            border-color: #D1A52A;
        }
        .btn-submit {
            background: #D1A52A;
            color: #200F3B;
            padding: 12px 30px;
            border: none;
            border-radius: 30px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s;
        }
        .btn-submit:hover {
            background: #FFD700;
            transform: translateY(-2px);
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
        .alert-error {
            background: #f8d7da;
            color: #721c24;
            border-left: 4px solid #dc3545;
        }
        @media (max-width: 768px) {
            .form-container {
                padding: 25px;
            }
        }
    </style>
</head>
<body>
    <header class="admin-header">
        <div class="admin-container">
            <div class="header-content">
                <div class="logo">
                    <h2>Edit Blog Post</h2>
                </div>
                <a href="dashboard.php" class="btn-back"><i class="fas fa-arrow-left"></i> Back to Dashboard</a>
            </div>
        </div>
    </header>

    <main class="main-content">
        <div class="admin-container">
            <div class="form-container">
                <?php if ($success): ?>
                    <div class="alert alert-success">
                        <i class="fas fa-check-circle"></i> <?php echo $success; ?>
                    </div>
                <?php endif; ?>
                
                <?php if ($error): ?>
                    <div class="alert alert-error">
                        <i class="fas fa-exclamation-triangle"></i> <?php echo $error; ?>
                    </div>
                <?php endif; ?>
                
                <form method="POST" action="">
                    <div class="form-group">
                        <label>Post Title *</label>
                        <input type="text" name="title" required value="<?php echo htmlspecialchars($post['title']); ?>">
                    </div>
                    
                    <div class="form-group">
                        <label>Category *</label>
                        <select name="category" required>
                            <option value="Marketing" <?php echo $post['category'] == 'Marketing' ? 'selected' : ''; ?>>Marketing</option>
                            <option value="Customer Experience" <?php echo $post['category'] == 'Customer Experience' ? 'selected' : ''; ?>>Customer Experience</option>
                            <option value="Productivity" <?php echo $post['category'] == 'Productivity' ? 'selected' : ''; ?>>Productivity</option>
                            <option value="Strategy" <?php echo $post['category'] == 'Strategy' ? 'selected' : ''; ?>>Strategy</option>
                            <option value="Leadership" <?php echo $post['category'] == 'Leadership' ? 'selected' : ''; ?>>Leadership</option>
                        </select>
                    </div>
                    
                    <div class="form-group">
                        <label>Excerpt (Short Description)</label>
                        <textarea name="excerpt" rows="3"><?php echo htmlspecialchars($post['excerpt']); ?></textarea>
                    </div>
                    
                    <div class="form-group">
                        <label>Content (Full Post) *</label>
                        <textarea name="content" rows="15" required><?php echo htmlspecialchars($post['content']); ?></textarea>
                    </div>
                    
                    <div class="form-group">
                        <label>Featured Image URL</label>
                        <input type="text" name="image_url" value="<?php echo htmlspecialchars($post['image_url']); ?>" placeholder="https://example.com/image.jpg">
                    </div>
                    
                    <div class="form-group">
                        <label>Status</label>
                        <select name="status">
                            <option value="published" <?php echo $post['status'] == 'published' ? 'selected' : ''; ?>>Published</option>
                            <option value="draft" <?php echo $post['status'] == 'draft' ? 'selected' : ''; ?>>Draft</option>
                        </select>
                    </div>
                    
                    <button type="submit" class="btn-submit"><i class="fas fa-save"></i> Update Post</button>
                </form>
            </div>
        </div>
    </main>
</body>
</html>