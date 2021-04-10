# you can require stdlib classes if you need them

module MassPay
  def self.group_payouts(payouts,max_group_size=250)
    grouped_payouts = []
    
    payouts.each do |p|
      if !grouped_payouts.include?(p['email'])
        grouped_payouts.push(p)
      end
    end
    
    return grouped_payouts
  end
end

example = [
  { email: "bob@example.com", amount: 400 },
  { email: "susan@example.com", amount: 8000 },
  { email: "bob@example.com", amount: 400 },
  { email: "alan@example.com", amount: 300 },
  { email: "alan@example.com", amount: 12 },
  { email: "dana@example.com", amount: 675 }
]

puts MassPay.group_payouts(example).inspect

## the return result is an array of arrays, a single array should contain 
## *max payement of 250 and *not contain double same email

# Just one possible valid output! Order and groupings don't matter
# so long as you follow the rules.
#
# [
#   [
#     {:email=>"alan@example.com", :amount=>12},
#     {:email=>"bob@example.com", :amount=>400},
#     {:email=>"dana@example.com", :amount=>675},
#     {:email=>"susan@example.com", :amount=>8000}
#   ],
#   [
#     {:email=>"bob@example.com", :amount=>400},
#     {:email=>"alan@example.com", :amount=>300}
#   ]
# ]