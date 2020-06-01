def repeatedString(s, n)
  count = 0
  return n if s == 'a'

  l = n - s.size
  for i in (0...l)
    ss = s.concat(s[i])
  end

  sn = ss.size
  for i in (0...sn)
    count += 1 if ss[i] == 'a'
  end
  count
end


def repeatedString(s, n)
  count1 = 0
  count2 = 0
  l = s.size
  subs = n/l
  reste = n%l
  for i in (0...l)
    count1 += 1 if s[i] == 'a'
    count2 += 1 if s[i] == 'a' && i < reste
  end
  total = count1 * subs + count2
  total
end



s = 'aaezrretrezerzgrthrejtgkerijtgeiriotjrzjtizerhgtrkjeaeziyeiabfjzeuirahzjrbajfkfiuarfaiojlkcbfjkopfizopmauaoaueoaeaaruazopijroajfkaljapoaujoajlkfaapoejoapjoajaaojpoajoaoaoarpjaorfaaoprfjaijraorjapjropajroauouraopjrofajroajrpoajljpapoaoajopjrjoaoajojoprejaopazaozjaopjzoajzaojzaoujzpamozjapojoljalpjzopaujzazaipzpoiahzioahoajzajzopjapzjajzajzajzpajzkjalziozaizapohzohjioazjapujzaozjopahzpi'
n = 2854
puts repeatedString(s, n)