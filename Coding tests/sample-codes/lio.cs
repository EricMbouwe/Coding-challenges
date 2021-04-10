﻿using System;

namespace Eric {
  class Program {
    static void Main(string[] args) {
      string sentence;
      int counter = 0;
      bool exit = true;

      Console.WriteLine("Write a sentence, I will display the length of the last word");
      sentence = Console.ReadLine();

      for (int i = sentence.Length - 1; i > 0; i--) {
        while (exit) {
          counter++;
          if (sentence[i] == ' ') {
            counter -= 1;
            exit = false;
          } else {
            break;
          }
        }  
      }
      Console.WriteLine(counter);
    }
  }
}