# s = 'abcabcabca'
# size = s.size
# mid = size/2
# en = size - 1

# puts s
# puts size
# puts s[mid]
# puts s[en]
# puts s[0, mid]
# puts s[mid, en]

s = "hello"
puts s[1]

def anagram(s)
  size = s.size
  mid = size / 2
  en = size - 1

  return -1 if (size % 2).odd?

  s1 = s[0, mid]
  s2 = s[mid, en]
  checker = []
  common = 0

  # xaxb bbxx

  for i in (0...mid)
    letter = s2[i]
    if s1.include?(letter)
      if checker.include?(letter)
        common = common
      else
        common += 1
        checker.push(letter)
      end
    end
  end
  res = mid - common
end

def anagram(s)
  size = s.size
  mid = size/2
  en = size - 1
  
  return -1 if (size%2).odd?
  
  s1 = s[0, mid]
  s2 = s[mid, en]
  checker = []
  common = 0
  
  # xaxb bbxx
  
  hash1 = Hash.new(0)
  hash2 = Hash.new(0)
  
  s1.each_char do |c|
    hash1[c] += 1
  end
  s2.each_char do |c|
    hash2[c] += 1
  end
  
  hash1
end
