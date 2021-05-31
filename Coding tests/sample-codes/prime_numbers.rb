def is_prime(n)
  return false if n == 0
  return false if n == 2

  for i in 2...n
    return false if n % i == 0
  end
  true
end

def primes(n)
  for i in 0..n
    p i if is_prime(i)
  end
end

def n_primes(n)
  count = 0
  i = 0

  until count == n
    if is_prime(i)
      p i
      count += 1
    end
    i += 1
  end
end

# p is_prime(187) #=> false
# primes(50) #=> primes of 5O first numbers
# n_primes(187) #=> 187 first primes numbers