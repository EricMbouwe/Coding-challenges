def findDigits(n)
  str = n.to_s
  res = 0
  str.each_char do |c|
    i = c.to_i
    unless i == 0
      if (n % i).zero?
        res += 1
      end
    end
  end
  res
end
