# README

Roadmap
- ~~Complete 1st version~~ 
- Design backend with Rails Model
- Implement GraphQL 
- Implement real time commenting and chat system either using Firebase or Pusher or Sendbird or PubNub

Things you may want to cover:
* Tools version
    * ruby : 2.5.1
    * rails : 5.2.1
    * reactjs : 16.7.0
    * webpack-dev-server : 3.1.9

* System dependencies

* Configuration

* Database creation

* Database initialization and Table Design
    * experiences
        * id - bigint
        * year
        * job_title
        * company_name
    * experience_descriptions
        * id - bigint
        * experience_id
        * description
    * skill_sets
        * id - bigint
        * tech
        * color
    * projects
        * id
        * title
        * description
        * github_link
    * project_skill_sets
        * id
        * project_id
        * skill_set_id

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions
    * Heroku 


