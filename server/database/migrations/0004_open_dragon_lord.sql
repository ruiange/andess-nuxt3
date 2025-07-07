ALTER TABLE `articles` ADD `summary` text;--> statement-breakpoint
ALTER TABLE `articles` ADD `image` text;--> statement-breakpoint
ALTER TABLE `articles` ADD `tags` text DEFAULT '[]';