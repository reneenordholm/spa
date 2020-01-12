class Renee < ApplicationRecord
    # a renee has many trades
    has_many :trades

    # enable password encryption
    has_secure_password
end
