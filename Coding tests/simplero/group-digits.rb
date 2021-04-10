module Invoice
  def self.format_number(str)
    return str if str.length == 1 

    str.split("").each do |i|
        if i.is_a?(Integer)
            return i
        end 
    end
  end
end

puts Invoice.format_number("ab1234")
puts Invoice.format_number("1846989234")
puts Invoice.format_number("4")
puts Invoice.format_number("123")
puts Invoice.format_number("12389")
# 12-34
# 184-698-923-4
# 4
# 123
# 123-89

# the digits must be grouped 3 by 3 or at least 2 separeted with (-)