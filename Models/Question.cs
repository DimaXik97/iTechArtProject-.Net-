using System;
using System.Collections.Generic;
using System.Text;

namespace Models
{
    public class Question
    {
        public int Id { get; set; }
        public string Name{ get; set; }
        public bool IsReady { get; set; }
        public int TypeQuestion { get; set; }

        /*public List<Вариант ответов> Варианты ответов { get; set; }*/
    } 
}
