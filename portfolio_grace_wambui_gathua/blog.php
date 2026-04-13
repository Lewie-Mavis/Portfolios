<?php
require_once 'config/db_config.php';

// Pagination
$page = isset($_GET['page']) ? (int)$_GET['page'] : 1;
$limit = 6;
$offset = ($page - 1) * $limit;

// Get total posts count
$count_query = "SELECT COUNT(*) as total FROM blog_posts WHERE status = 'published'";
$count_result = $conn->query($count_query);
$total_posts = $count_result->fetch_assoc()['total'];
$total_pages = ceil($total_posts / $limit);

// Fetch blog posts
$query = "SELECT * FROM blog_posts WHERE status = 'published' ORDER BY created_at DESC LIMIT $limit OFFSET $offset";
$result = $conn->query($query);
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Blog - Grace Wambui Gathua</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <link rel="stylesheet" href="css/styles.css">
    <style>
        .blog-page {
            padding-top: 100px;
            padding-bottom: 60px;
        }
        .pagination {
            display: flex;
            justify-content: center;
            gap: 10px;
            margin-top: 50px;
        }
        .pagination a, .pagination span {
            padding: 10px 15px;
            border-radius: 8px;
            text-decoration: none;
            color: #200F3B;
            transition: all 0.3s;
        }
        .pagination a:hover {
            background: #D1A52A;
            color: white;
        }
        .pagination .active {
            background: #D1A52A;
            color: white;
        }
    </style>
</head>
<body>
    <?php include 'header.php'; ?>
    
    <main class="blog-page">
        <div class="container">
            <div class="section-header">
                <div class="section-badge">Latest Insights</div>
                <h2><span class="first-name">From The</span> <span class="last-name">Blog</span></h2>
                <p>Marketing tips, strategies, and insights to grow your business</p>
            </div>
            
            <div class="blog-grid">
                <?php while ($post = $result->fetch_assoc()): ?>
                <div class="blog-card">
                    <div class="blog-image">
                        <img src="<?php echo htmlspecialchars($post['image_url'] ?: 'https://placehold.co/400x250/200F3B/white?text=' . urlencode($post['category'])); ?>" alt="<?php echo htmlspecialchars($post['title']); ?>">
                        <div class="blog-category"><?php echo htmlspecialchars($post['category']); ?></div>
                    </div>
                    <div class="blog-content">
                        <div class="blog-meta">
                            <span><i class="far fa-calendar-alt"></i> <?php echo date('M d, Y', strtotime($post['created_at'])); ?></span>
                            <span><i class="far fa-clock"></i> <?php echo ceil(str_word_count(strip_tags($post['content'])) / 200); ?> min read</span>
                        </div>
                        <h3><?php echo htmlspecialchars($post['title']); ?></h3>
                        <p><?php echo htmlspecialchars(substr(strip_tags($post['excerpt'] ?: $post['content']), 0, 120)) . '...'; ?></p>
                        <a href="single-blog.php?slug=<?php echo $post['slug']; ?>" class="blog-read-more">Read More <i class="fas fa-arrow-right"></i></a>
                    </div>
                </div>
                <?php endwhile; ?>
            </div>
            
            <?php if ($total_pages > 1): ?>
            <div class="pagination">
                <?php if ($page > 1): ?>
                    <a href="?page=<?php echo $page - 1; ?>"><i class="fas fa-chevron-left"></i> Prev</a>
                <?php endif; ?>
                
                <?php for ($i = 1; $i <= $total_pages; $i++): ?>
                    <?php if ($i == $page): ?>
                        <span class="active"><?php echo $i; ?></span>
                    <?php else: ?>
                        <a href="?page=<?php echo $i; ?>"><?php echo $i; ?></a>
                    <?php endif; ?>
                <?php endfor; ?>
                
                <?php if ($page < $total_pages): ?>
                    <a href="?page=<?php echo $page + 1; ?>">Next <i class="fas fa-chevron-right"></i></a>
                <?php endif; ?>
            </div>
            <?php endif; ?>
        </div>
    </main>
    
    <?php include 'footer.php'; ?>
</body>
</html>