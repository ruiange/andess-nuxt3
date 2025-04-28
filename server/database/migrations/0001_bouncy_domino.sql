CREATE TABLE `articles` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`title` text NOT NULL,
	`content` text NOT NULL,
	`published_at` integer NOT NULL,
	`view_count` integer DEFAULT 0,
	`favorite_count` integer DEFAULT 0,
	`attachments` text DEFAULT '[]',
	`created_at` integer NOT NULL
);
