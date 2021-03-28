class Node
  attr_accessor :value, :next_node
  
  def initialize(value, next_node = nil)
	  @value = value
    @next_node = next_node
  end
end

class LinkedList
  #setup head and temp
  def initialize
    @head = nil
  end

  def add(number)
    n = Node.new(number)
    n.value = number       
    n.next_node = nil

    return @head = n if @head == nil
      
    @temp = Node.new(0)
    @temp = @head
    while @temp.next_node != nil
      @temp = @temp.next_node
    end
    @temp.next_node = n

  end

  def get(index)
    @temp = Node.new(0)
    @temp = @head
    @count = 0
    
    while @temp != nil
      return @temp.value  if @count == index

      @count += 1
      @temp = @temp.next_node
    end
  end
  
end

list = LinkedList.new
list.add(5)
list.add(7)
list.add(2)
puts list.inspect
# => 5

#  def add(number)
#     n = Node.new(number)    # create a new node
#     n.value = number        # set the value
#     n.next_node = nil       # set the pointer to next node
#     @head = n               # make the list point to the new node
    
#                             # n.next_node = @head  add at the beginning of the list
#                             # @head = n
    
#                             # temp = Node.new(0)    # create a temporarly node
#     @temp = @head           # set temp to point to whatever list is pointing
    
#     while @temp.next_node != nil
#       @temp = @temp.next_node
#       @head = @temp
#     end
#     @head = n
#   end