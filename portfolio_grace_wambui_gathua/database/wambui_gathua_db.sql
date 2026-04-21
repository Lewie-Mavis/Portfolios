-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 13, 2026 at 10:52 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `wambui_gathua_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `blog_posts`
--

CREATE TABLE `blog_posts` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `slug` varchar(255) NOT NULL,
  `category` varchar(50) NOT NULL,
  `content` text NOT NULL,
  `excerpt` varchar(500) DEFAULT NULL,
  `image_url` varchar(255) DEFAULT NULL,
  `author` varchar(100) DEFAULT 'Grace Wambui Gathua',
  `views` int(11) DEFAULT 0,
  `status` enum('draft','published') DEFAULT 'published',
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `blog_posts`
--

INSERT INTO `blog_posts` (`id`, `title`, `slug`, `category`, `content`, `excerpt`, `image_url`, `author`, `views`, `status`, `created_at`, `updated_at`) VALUES
(1, '10 Proven Strategies to Boost Your Social Media Engagement', '10-proven-strategies-boost-social-media-engagement', 'Marketing', '<p>Social media engagement is crucial for building brand awareness and driving conversions. Here are 10 proven strategies to boost your engagement rates:</p>\r\n<h2>1. Know Your Audience</h2>\r\n<p>Understanding your target audience is the foundation of any successful social media strategy.</p>\r\n<h2>2. Post at Optimal Times</h2>\r\n<p>Use analytics to determine when your audience is most active.</p>\r\n<h2>3. Create Engaging Visuals</h2>\r\n<p>High-quality images, videos, and infographics capture attention.</p>\r\n<h2>4. Ask Questions</h2>\r\n<p>Encourage comments by asking thought-provoking questions.</p>\r\n<h2>5. Run Contests and Giveaways</h2>\r\n<p>Contests are excellent for boosting engagement.</p>\r\n<h2>6. Respond to Comments</h2>\r\n<p>Show your audience you value them by responding promptly.</p>\r\n<h2>7. Use Hashtags Strategically</h2>\r\n<p>Research and use relevant hashtags for discoverability.</p>\r\n<h2>8. Share User-Generated Content</h2>\r\n<p>Reposting customer content builds community.</p>\r\n<h2>9. Leverage Stories and Live Videos</h2>\r\n<p>Real-time content creates urgency and authenticity.</p>\r\n<h2>10. Analyze and Adjust</h2>\r\n<p>Regularly review analytics and adjust your strategy.</p>', 'Discover actionable tips to increase engagement and grow your online presence organically.', 'https://placehold.co/400x250/200F3B/white?text=Marketing+Strategy', 'Grace Wambui Gathua', 2, 'published', '2026-04-13 08:10:56', '2026-04-13 08:44:27'),
(2, 'How to Build a Customer Experience That Drives Loyalty', 'how-build-customer-experience-drives-loyalty', 'Customer Experience', '<p>Customer experience has become the ultimate competitive advantage. Here\'s how to build an experience that turns customers into loyal advocates.</p>\r\n<h2>Understanding Customer Journey Mapping</h2>\r\n<p>Start by mapping every touchpoint a customer has with your brand.</p>\r\n<h2>Personalization at Scale</h2>\r\n<p>Use data to personalize interactions without feeling invasive.</p>\r\n<h2>Proactive Support</h2>\r\n<p>Anticipate customer needs before they become issues.</p>\r\n<h2>Consistent Omnichannel Experience</h2>\r\n<p>Ensure seamless experiences across all channels.</p>\r\n<h2>Measure What Matters</h2>\r\n<p>Track metrics like NPS, CSAT, and Customer Effort Score.</p>', 'Learn how exceptional customer service can turn one-time buyers into lifelong advocates.', 'https://placehold.co/400x250/161E85/white?text=Customer+Experience', 'Grace Wambui Gathua', 3, 'published', '2026-04-13 08:10:56', '2026-04-13 08:44:30'),
(3, '5 Systems Every Entrepreneur Needs to Reclaim 10+ Hours Weekly', '5-systems-every-entrepreneur-needs-reclaim-10-hours-weekly', 'Productivity', '<p>As an entrepreneur, your time is your most valuable asset. Here are 5 essential systems that will save you 10+ hours every week.</p>\r\n<h2>1. Project Management System</h2>\r\n<p>Tools like Asana, Trello, or ClickUp help track tasks and deadlines.</p>\r\n<h2>2. Email Management System</h2>\r\n<p>Use filters, folders, and templates to process emails faster.</p>\r\n<h2>3. Content Calendar System</h2>\r\n<p>Plan content 30-60 days in advance and batch create.</p>\r\n<h2>4. Financial Automation</h2>\r\n<p>Automate invoicing, expense tracking, and payment reminders.</p>\r\n<h2>5. Standard Operating Procedures (SOPs)</h2>\r\n<p>Document repetitive processes so you can delegate or automate.</p>', 'Streamline your operations with these essential systems for business efficiency.', 'https://placehold.co/400x250/D1A52A/white?text=Productivity', 'Grace Wambui Gathua', 1, 'published', '2026-04-13 08:10:56', '2026-04-13 08:27:13');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(100) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `email`, `created_at`) VALUES
(1, 'admin', '$2y$10$qHmHpNkNBXSs9XuHK/MevuLENpjgIzIieOOCUD2hhB1hlf4kHraBG', 'wambuigathua.va@gmail.com', '2026-04-13 08:10:56');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `blog_posts`
--
ALTER TABLE `blog_posts`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `slug` (`slug`),
  ADD KEY `idx_slug` (`slug`),
  ADD KEY `idx_status` (`status`),
  ADD KEY `idx_created` (`created_at`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `blog_posts`
--
ALTER TABLE `blog_posts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
