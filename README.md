# Jungle

A mini e-commerce application built with Rails 6.1 for purposes of teaching Rails by example.

## Setup

1. Run `bundle install` to install dependencies
2. Create `config/database.yml` by copying `config/database.example.yml`
3. Create `config/secrets.yml` by copying `config/secrets.example.yml`
4. Run `bin/rails db:reset` to create, load and seed db
5. Create .env file based on .env.example
6. Sign up for a Stripe account
7. Put Stripe (test) keys into appropriate .env vars
8. Run `bin/rails s -b 0.0.0.0` to start the server

## Database

If Rails is complaining about authentication to the database, uncomment the user and password fields from `config/database.yml` in the development and test sections, and replace if necessary the user and password `development` to an existing database user.

## Stripe Testing

Use Credit Card # 4111 1111 1111 1111 for testing success scenarios.

More information in their docs: <https://stripe.com/docs/testing#cards>

## Dependencies

- Rails 6.1 [Rails Guide](http://guides.rubyonrails.org/v6.1/)
- Bootstrap 5
- PostgreSQL 9.x
- Stripe

## Final Product

_screenshot of landing page_
!["screenshot of langing page"](https://github.com/RemiBorris/jungle-rails/blob/master/docs/landing%20page.png?raw=true)
_example of sold out item_
!["screenshot of sold out exmaple"](https://github.com/RemiBorris/jungle-rails/blob/master/docs/sold%20out.png?raw=true)
_selection of categories_
!["screenshot of categories"](https://github.com/RemiBorris/jungle-rails/blob/master/docs/categories.png?raw=true)
_screenshot of checkout screen_
!["screenshot of checkout screen"](https://github.com/RemiBorris/jungle-rails/blob/master/docs/checkout.png?raw=true)
_screenshot of checkout screen_
!["screenshot of payment screen"](https://github.com/RemiBorris/jungle-rails/blob/master/docs/payment.png?raw=true)
_screenshot of order confirmation screen_
!["screenshot of order confirmation screen"](https://github.com/RemiBorris/jungle-rails/blob/master/docs/order%20confirmation.png?raw=true)