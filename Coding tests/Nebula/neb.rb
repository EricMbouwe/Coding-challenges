class Alien
    def initialize(name)
         @name = name
    end

    def can_talk_to?(character)
        character.is_a?(Alien)
    end
end

class Human
    def initialize(name)
         @name = name
    end

    def speack(word)
        puts word
    end
end

a = Alien.new('den')
b = Alien.new('ben')
h = Human.new('man')

puts a.can_talk_to?(b)
