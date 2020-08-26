def sqrt(number)
  sqrt_recursive(number, 0, number)
end

def sqrt_recursive(number, min_interval, max_interval)
  i = 0
  squart = 0
  
  if min_interval == 0
    min = number / 2
    return sqrt_recursive(number,min, number )
  else
    temp = min_interval * min_interval
    
    if temp > number
      while i <= min_interval do
        if i * i == number
          squart = i
        end
        i += 1
      end
    elsif temp < number
      while min_interval <= max_interval do
        if i * i == number
          squart = i
        end
        i += 1
      end
    else
      squart = i
    end
  end
 
  squart
end

puts sqrt(25)
puts sqrt(7056)
