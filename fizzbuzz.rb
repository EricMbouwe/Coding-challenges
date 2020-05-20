(1..100).each do |i|
  puts i unless (i % 15).zero? || (i % 3).zero? || (i % 5).zero?
  if (i % 15).zero?
    puts 'FizzBuzz'
  elsif (i % 3).zero?
    puts 'Fizz'
  elsif (i % 5).zero?
    puts 'Buzz'
  end
end
