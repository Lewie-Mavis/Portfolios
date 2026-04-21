<?php
require_once 'config/db_config.php';

$slug = isset($_GET['slug']) ? $_GET['slug'] : '';

if (empty($slug)) {
    header("Location: blog.php");
    exit();
}

// Fetch blog post
$stmt = $conn->prepare("SELECT * FROM blog_posts WHERE slug = ? AND status = 'published'");
$stmt->bind_param("s", $slug);
$stmt->execute();
$result = $stmt->get_result();
$post = $result->fetch_assoc();

if (!$post) {
    header("Location: blog.php");
    exit();
}

// Update view count
$update_stmt = $conn->prepare("UPDATE blog_posts SET views = views + 1 WHERE id = ?");
$update_stmt->bind_param("i", $post['id']);
$update_stmt->execute();

// Get previous and next posts
$prev_query = "SELECT id, title, slug FROM blog_posts WHERE status = 'published' AND id < ? ORDER BY id DESC LIMIT 1";
$prev_stmt = $conn->prepare($prev_query);
$prev_stmt->bind_param("i", $post['id']);
$prev_stmt->execute();
$prev_result = $prev_stmt->get_result();
$prev_post = $prev_result->fetch_assoc();

$next_query = "SELECT id, title, slug FROM blog_posts WHERE status = 'published' AND id > ? ORDER BY id ASC LIMIT 1";
$next_stmt = $conn->prepare($next_query);
$next_stmt->bind_param("i", $post['id']);
$next_stmt->execute();
$next_result = $next_stmt->get_result();
$next_post = $next_result->fetch_assoc();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo htmlspecialchars($post['title']); ?> |  Wambui Gathua</title>
	
	  <!-- Favicon & App Icons -->
  <link rel="icon" type="image/png" href="images/icon.png">
  <link rel="apple-touch-icon" sizes="180x180" href="images/images/icon.png">
  <link rel="icon" type="image/png" sizes="32x32" href="images/images/icon.png">
  <link rel="icon" type="image/png" sizes="16x16" href="images/images/icon.png">
  <link rel="manifest" href="site.webmanifest">
  
    <meta name="description" content="<?php echo htmlspecialchars(substr(strip_tags($post['content']), 0, 160)); ?>">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <link rel="stylesheet" href="css/styles.css">
    <style>
        .single-blog {
            padding-top: 120px;
            padding-bottom: 60px;
        }
        .blog-hero {
            background: linear-gradient(135deg, #200F3B 0%, #161E85 100%);
            color: white;
            padding: 60px 0;
            margin-bottom: 50px;
        }
        .blog-container {
            max-width: 800px;
            margin: 0 auto;
            padding: 0 20px;
        }
        .blog-category {
            display: inline-block;
            background: #D1A52A;
            color: #200F3B;
            padding: 5px 15px;
            border-radius: 20px;
            font-size: 0.8rem;
            font-weight: 600;
            margin-bottom: 20px;
        }
        .blog-title {
            font-size: 2.5rem;
            margin-bottom: 20px;
            line-height: 1.3;
        }
        .blog-meta {
            display: flex;
            gap: 20px;
            color: rgba(255,255,255,0.8);
            font-size: 0.9rem;
        }
        .blog-featured-image {
            width: 100%;
            border-radius: 20px;
            margin-bottom: 40px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        }
        .blog-content {
            font-size: 1.05rem;
            line-height: 1.8;
            color: #333;
        }
        .blog-content h2 {
            color: #200F3B;
            margin: 30px 0 15px;
            font-size: 1.8rem;
        }
        .blog-content p {
            margin-bottom: 20px;
        }
        .blog-content ul, .blog-content ol {
            margin-bottom: 20px;
            padding-left: 20px;
        }
        .blog-content li {
            margin-bottom: 10px;
        }
        .blog-navigation {
            display: flex;
            justify-content: space-between;
            margin-top: 50px;
            padding-top: 30px;
            border-top: 1px solid #eee;
        }
        .nav-prev, .nav-next {
            flex: 1;
        }
        .nav-next {
            text-align: right;
        }
        .nav-label {
            font-size: 0.8rem;
            color: #999;
            margin-bottom: 5px;
        }
        .nav-link {
            color: #D1A52A;
            text-decoration: none;
            font-weight: 600;
        }
        .nav-link:hover {
            text-decoration: underline;
        }
        @media (max-width: 768px) {
            .single-blog {
                padding-top: 100px;
            }
            .blog-title {
                font-size: 1.8rem;
            }
            .blog-content {
                font-size: 1rem;
            }
        }
    </style>
</head>
<body>
    <?php include 'header.php'; ?>
    
    <div class="blog-hero">
        <div class="blog-container">
            <div class="blog-category"><?php echo htmlspecialchars($post['category']); ?></div>
            <h1 class="blog-title"><?php echo htmlspecialchars($post['title']); ?></h1>
            <div class="blog-meta">
                <span><i class="far fa-calendar-alt"></i> <?php echo date('F j, Y', strtotime($post['created_at'])); ?></span>
                <span><i class="far fa-user"></i> <?php echo htmlspecialchars($post['author']); ?></span>
                <span><i class="far fa-eye"></i> <?php echo number_format($post['views']); ?> views</span>
            </div>
        </div>
    </div>
    
    <div class="single-blog">
        <div class="blog-container">
            <?php if ($post['image_url']): ?>
                <img src="<?php echo htmlspecialchars($post['image_url']); ?>" alt="<?php echo htmlspecialchars($post['title']); ?>" class="blog-featured-image">
            <?php endif; ?>
            
            <div class="blog-content">
                <?php echo $post['content']; ?>
            </div>
            
            <div class="blog-navigation">
                <div class="nav-prev">
                    <?php if ($prev_post): ?>
                        <div class="nav-label">Previous Post</div>
                        <a href="single-blog.php?slug=<?php echo $prev_post['slug']; ?>" class="nav-link"><i class="fas fa-arrow-left"></i> <?php echo htmlspecialchars($prev_post['title']); ?></a>
                    <?php endif; ?>
                </div>
                <div class="nav-next">
                    <?php if ($next_post): ?>
                        <div class="nav-label">Next Post</div>
                        <a href="single-blog.php?slug=<?php echo $next_post['slug']; ?>" class="nav-link"><?php echo htmlspecialchars($next_post['title']); ?> <i class="fas fa-arrow-right"></i></a>
                    <?php endif; ?>
                </div>
            </div>
        </div>
    </div>
    
    <?php include 'footer.php'; ?>
</body>
</html>