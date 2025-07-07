ALTER TABLE `articles` ADD COLUMN `summary` text;
ALTER TABLE `articles` ADD COLUMN `image` text;
ALTER TABLE `articles` ADD COLUMN `tags` text DEFAULT '[]'; 