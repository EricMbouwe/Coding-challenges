def anagram(s)
    return -1 if !s.length.even? 
    
    # sub1 = s.slice(0, s.length/2)
    # sub2 = s.slice(s.length/2, s.length)
    
    # subArray1 = sub1.split("")  
    # subArray2 = sub2.split("")

    # subArray1 = s[0...s.length/2].split('')  
    # subArray2 = s[s.length/2...s.length].split('') 

    subArray1 = s.split('')[0...s.length/2]
    subArray2 = s.split('')[s.length/2...s.length]
    common = 0

    subArray1.each_with_index do |i, _|
        subArray2.each_with_index do |j, idj|
            if (i == j)
                common += 1
                subArray2.slice!(idj, 1)
                break
            end
        end
    end
    
    missing = subArray1.size - common
end

# puts anagram('fdhlvosfpafhalll')
# puts anagram('mvdalvkiopaufl')
# puts anagram('mvd')
# puts anagram('asdfjoieufoa')
puts anagram('andiihdkdsjiazhdfdjhzhfhzhzadg(doiah)dhzgdyuansdizuddizéjodzihédziéjdizzsdagdyazgyugdaygudagjkjkzmjfiezjfiezjifjiezjfiezjhifjziejfizejafiuydiuhuhzaufedazdyzzjfiejfjiezjifhiezjfiezjfzekfjiezhfihfhoizehfvezgftezvcgezvuda')


a = ["f", "d", "h", "l", "v", "o", "s", "f"]
b = ["p", "a", "f", "h", "a", "l", "l", "l"]
s = 'fdhlvosfpafhalll'