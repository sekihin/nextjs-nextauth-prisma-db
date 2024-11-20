-- CreateTable
CREATE TABLE `account` (
    `id` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `type` VARCHAR(191) NOT NULL,
    `provider` VARCHAR(191) NOT NULL,
    `providerAccountId` VARCHAR(191) NOT NULL,
    `refresh_token` TEXT NULL,
    `access_token` TEXT NULL,
    `expires_at` INTEGER NULL,
    `token_type` VARCHAR(191) NULL,
    `scope` VARCHAR(191) NULL,
    `id_token` TEXT NULL,
    `session_state` VARCHAR(191) NULL,

    UNIQUE INDEX `account_provider_providerAccountId_key`(`provider`, `providerAccountId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `customers` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `company` VARCHAR(50) NULL,
    `last_name` VARCHAR(50) NULL,
    `first_name` VARCHAR(50) NULL,
    `email_address` VARCHAR(50) NULL,
    `job_title` VARCHAR(50) NULL,
    `business_phone` VARCHAR(25) NULL,
    `home_phone` VARCHAR(25) NULL,
    `mobile_phone` VARCHAR(25) NULL,
    `fax_number` VARCHAR(25) NULL,
    `address` LONGTEXT NULL,
    `city` VARCHAR(50) NULL,
    `state_province` VARCHAR(50) NULL,
    `zip_postal_code` VARCHAR(15) NULL,
    `country_region` VARCHAR(50) NULL,
    `web_page` LONGTEXT NULL,
    `notes` LONGTEXT NULL,
    `attachments` LONGBLOB NULL,

    INDEX `city`(`city`),
    INDEX `company`(`company`),
    INDEX `first_name`(`first_name`),
    INDEX `last_name`(`last_name`),
    INDEX `state_province`(`state_province`),
    INDEX `zip_postal_code`(`zip_postal_code`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `employee_privileges` (
    `employee_id` INTEGER NOT NULL,
    `privilege_id` INTEGER NOT NULL,

    INDEX `employee_id`(`employee_id`),
    INDEX `privilege_id`(`privilege_id`),
    INDEX `privilege_id_2`(`privilege_id`),
    PRIMARY KEY (`employee_id`, `privilege_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `employees` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `company` VARCHAR(50) NULL,
    `last_name` VARCHAR(50) NULL,
    `first_name` VARCHAR(50) NULL,
    `email_address` VARCHAR(50) NULL,
    `job_title` VARCHAR(50) NULL,
    `business_phone` VARCHAR(25) NULL,
    `home_phone` VARCHAR(25) NULL,
    `mobile_phone` VARCHAR(25) NULL,
    `fax_number` VARCHAR(25) NULL,
    `address` LONGTEXT NULL,
    `city` VARCHAR(50) NULL,
    `state_province` VARCHAR(50) NULL,
    `zip_postal_code` VARCHAR(15) NULL,
    `country_region` VARCHAR(50) NULL,
    `web_page` LONGTEXT NULL,
    `notes` LONGTEXT NULL,
    `attachments` LONGBLOB NULL,

    INDEX `city`(`city`),
    INDEX `company`(`company`),
    INDEX `first_name`(`first_name`),
    INDEX `last_name`(`last_name`),
    INDEX `state_province`(`state_province`),
    INDEX `zip_postal_code`(`zip_postal_code`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `inventory_transaction_types` (
    `id` TINYINT NOT NULL,
    `type_name` VARCHAR(50) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `inventory_transactions` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `transaction_type` TINYINT NOT NULL,
    `transaction_created_date` DATETIME(0) NULL,
    `transaction_modified_date` DATETIME(0) NULL,
    `product_id` INTEGER NOT NULL,
    `quantity` INTEGER NOT NULL,
    `purchase_order_id` INTEGER NULL,
    `customer_order_id` INTEGER NULL,
    `comments` VARCHAR(255) NULL,

    INDEX `customer_order_id`(`customer_order_id`),
    INDEX `customer_order_id_2`(`customer_order_id`),
    INDEX `product_id`(`product_id`),
    INDEX `product_id_2`(`product_id`),
    INDEX `purchase_order_id`(`purchase_order_id`),
    INDEX `purchase_order_id_2`(`purchase_order_id`),
    INDEX `transaction_type`(`transaction_type`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `invoices` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `order_id` INTEGER NULL,
    `invoice_date` DATETIME(0) NULL,
    `due_date` DATETIME(0) NULL,
    `tax` DECIMAL(19, 4) NULL DEFAULT 0.0000,
    `shipping` DECIMAL(19, 4) NULL DEFAULT 0.0000,
    `amount_due` DECIMAL(19, 4) NULL DEFAULT 0.0000,

    INDEX `fk_invoices_orders1_idx`(`order_id`),
    INDEX `id`(`id`),
    INDEX `id_2`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `order_details` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `order_id` INTEGER NOT NULL,
    `product_id` INTEGER NULL,
    `quantity` DECIMAL(18, 4) NOT NULL DEFAULT 0.0000,
    `unit_price` DECIMAL(19, 4) NULL DEFAULT 0.0000,
    `discount` DOUBLE NOT NULL DEFAULT 0,
    `status_id` INTEGER NULL,
    `date_allocated` DATETIME(0) NULL,
    `purchase_order_id` INTEGER NULL,
    `inventory_id` INTEGER NULL,

    INDEX `fk_order_details_order_details_status1_idx`(`status_id`),
    INDEX `fk_order_details_orders1_idx`(`order_id`),
    INDEX `id`(`id`),
    INDEX `id_2`(`id`),
    INDEX `id_3`(`id`),
    INDEX `id_4`(`id`),
    INDEX `id_5`(`id`),
    INDEX `inventory_id`(`inventory_id`),
    INDEX `product_id`(`product_id`),
    INDEX `product_id_2`(`product_id`),
    INDEX `purchase_order_id`(`purchase_order_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `order_details_status` (
    `id` INTEGER NOT NULL,
    `status_name` VARCHAR(50) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `orders` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `employee_id` INTEGER NULL,
    `customer_id` INTEGER NULL,
    `order_date` DATETIME(0) NULL,
    `shipped_date` DATETIME(0) NULL,
    `shipper_id` INTEGER NULL,
    `ship_name` VARCHAR(50) NULL,
    `ship_address` LONGTEXT NULL,
    `ship_city` VARCHAR(50) NULL,
    `ship_state_province` VARCHAR(50) NULL,
    `ship_zip_postal_code` VARCHAR(50) NULL,
    `ship_country_region` VARCHAR(50) NULL,
    `shipping_fee` DECIMAL(19, 4) NULL DEFAULT 0.0000,
    `taxes` DECIMAL(19, 4) NULL DEFAULT 0.0000,
    `payment_type` VARCHAR(50) NULL,
    `paid_date` DATETIME(0) NULL,
    `notes` LONGTEXT NULL,
    `tax_rate` DOUBLE NULL DEFAULT 0,
    `tax_status_id` TINYINT NULL,
    `status_id` TINYINT NULL DEFAULT 0,

    INDEX `customer_id`(`customer_id`),
    INDEX `customer_id_2`(`customer_id`),
    INDEX `employee_id`(`employee_id`),
    INDEX `employee_id_2`(`employee_id`),
    INDEX `fk_orders_orders_status1`(`status_id`),
    INDEX `id`(`id`),
    INDEX `id_2`(`id`),
    INDEX `id_3`(`id`),
    INDEX `ship_zip_postal_code`(`ship_zip_postal_code`),
    INDEX `shipper_id`(`shipper_id`),
    INDEX `shipper_id_2`(`shipper_id`),
    INDEX `tax_status`(`tax_status_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `orders_status` (
    `id` TINYINT NOT NULL,
    `status_name` VARCHAR(50) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `orders_tax_status` (
    `id` TINYINT NOT NULL,
    `tax_status_name` VARCHAR(50) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `privileges` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `privilege_name` VARCHAR(50) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `products` (
    `supplier_ids` LONGTEXT NULL,
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `product_code` VARCHAR(25) NULL,
    `product_name` VARCHAR(50) NULL,
    `description` LONGTEXT NULL,
    `standard_cost` DECIMAL(19, 4) NULL DEFAULT 0.0000,
    `list_price` DECIMAL(19, 4) NOT NULL DEFAULT 0.0000,
    `reorder_level` INTEGER NULL,
    `target_level` INTEGER NULL,
    `quantity_per_unit` VARCHAR(50) NULL,
    `discontinued` BOOLEAN NOT NULL DEFAULT false,
    `minimum_reorder_quantity` INTEGER NULL,
    `category` VARCHAR(50) NULL,
    `attachments` LONGBLOB NULL,

    INDEX `product_code`(`product_code`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `purchase_order_details` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `purchase_order_id` INTEGER NOT NULL,
    `product_id` INTEGER NULL,
    `quantity` DECIMAL(18, 4) NOT NULL,
    `unit_cost` DECIMAL(19, 4) NOT NULL,
    `date_received` DATETIME(0) NULL,
    `posted_to_inventory` BOOLEAN NOT NULL DEFAULT false,
    `inventory_id` INTEGER NULL,

    INDEX `id`(`id`),
    INDEX `inventory_id`(`inventory_id`),
    INDEX `inventory_id_2`(`inventory_id`),
    INDEX `product_id`(`product_id`),
    INDEX `product_id_2`(`product_id`),
    INDEX `purchase_order_id`(`purchase_order_id`),
    INDEX `purchase_order_id_2`(`purchase_order_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `purchase_order_status` (
    `id` INTEGER NOT NULL,
    `status` VARCHAR(50) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `purchase_orders` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `supplier_id` INTEGER NULL,
    `created_by` INTEGER NULL,
    `submitted_date` DATETIME(0) NULL,
    `creation_date` DATETIME(0) NULL,
    `status_id` INTEGER NULL DEFAULT 0,
    `expected_date` DATETIME(0) NULL,
    `shipping_fee` DECIMAL(19, 4) NOT NULL DEFAULT 0.0000,
    `taxes` DECIMAL(19, 4) NOT NULL DEFAULT 0.0000,
    `payment_date` DATETIME(0) NULL,
    `payment_amount` DECIMAL(19, 4) NULL DEFAULT 0.0000,
    `payment_method` VARCHAR(50) NULL,
    `notes` LONGTEXT NULL,
    `approved_by` INTEGER NULL,
    `approved_date` DATETIME(0) NULL,
    `submitted_by` INTEGER NULL,

    UNIQUE INDEX `id`(`id`),
    INDEX `created_by`(`created_by`),
    INDEX `id_2`(`id`),
    INDEX `status_id`(`status_id`),
    INDEX `supplier_id`(`supplier_id`),
    INDEX `supplier_id_2`(`supplier_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `sales_reports` (
    `group_by` VARCHAR(50) NOT NULL,
    `display` VARCHAR(50) NULL,
    `title` VARCHAR(50) NULL,
    `filter_row_source` LONGTEXT NULL,
    `default` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`group_by`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `sessions` (
    `id` VARCHAR(191) NOT NULL,
    `sessionToken` VARCHAR(255) NOT NULL,
    `userId` CHAR(36) NOT NULL,
    `expires` VARCHAR(255) NOT NULL,

    UNIQUE INDEX `IDX_sessionToken`(`sessionToken`),
    INDEX `IDX_userId`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `shippers` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `company` VARCHAR(50) NULL,
    `last_name` VARCHAR(50) NULL,
    `first_name` VARCHAR(50) NULL,
    `email_address` VARCHAR(50) NULL,
    `job_title` VARCHAR(50) NULL,
    `business_phone` VARCHAR(25) NULL,
    `home_phone` VARCHAR(25) NULL,
    `mobile_phone` VARCHAR(25) NULL,
    `fax_number` VARCHAR(25) NULL,
    `address` LONGTEXT NULL,
    `city` VARCHAR(50) NULL,
    `state_province` VARCHAR(50) NULL,
    `zip_postal_code` VARCHAR(15) NULL,
    `country_region` VARCHAR(50) NULL,
    `web_page` LONGTEXT NULL,
    `notes` LONGTEXT NULL,
    `attachments` LONGBLOB NULL,

    INDEX `city`(`city`),
    INDEX `company`(`company`),
    INDEX `first_name`(`first_name`),
    INDEX `last_name`(`last_name`),
    INDEX `state_province`(`state_province`),
    INDEX `zip_postal_code`(`zip_postal_code`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `strings` (
    `string_id` INTEGER NOT NULL AUTO_INCREMENT,
    `string_data` VARCHAR(255) NULL,

    PRIMARY KEY (`string_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `suppliers` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `company` VARCHAR(50) NULL,
    `last_name` VARCHAR(50) NULL,
    `first_name` VARCHAR(50) NULL,
    `email_address` VARCHAR(50) NULL,
    `job_title` VARCHAR(50) NULL,
    `business_phone` VARCHAR(25) NULL,
    `home_phone` VARCHAR(25) NULL,
    `mobile_phone` VARCHAR(25) NULL,
    `fax_number` VARCHAR(25) NULL,
    `address` LONGTEXT NULL,
    `city` VARCHAR(50) NULL,
    `state_province` VARCHAR(50) NULL,
    `zip_postal_code` VARCHAR(15) NULL,
    `country_region` VARCHAR(50) NULL,
    `web_page` LONGTEXT NULL,
    `notes` LONGTEXT NULL,
    `attachments` LONGBLOB NULL,

    INDEX `city`(`city`),
    INDEX `company`(`company`),
    INDEX `first_name`(`first_name`),
    INDEX `last_name`(`last_name`),
    INDEX `state_province`(`state_province`),
    INDEX `zip_postal_code`(`zip_postal_code`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `users` (
    `id` CHAR(36) NOT NULL,
    `name` VARCHAR(255) NULL,
    `password` VARCHAR(255) NULL,
    `email` VARCHAR(255) NULL,
    `emailVerified` VARCHAR(255) NULL,
    `image` VARCHAR(255) NULL,
    `roles` VARCHAR(255) NULL,

    UNIQUE INDEX `IDX_email`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `verification_tokens` (
    `id` CHAR(36) NOT NULL,
    `token` VARCHAR(255) NOT NULL,
    `identifier` VARCHAR(255) NOT NULL,
    `expires` VARCHAR(255) NOT NULL,

    UNIQUE INDEX `IDX_token`(`token`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `account` ADD CONSTRAINT `account_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `sessions` ADD CONSTRAINT `sessions_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
