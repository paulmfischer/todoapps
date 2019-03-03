using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace todoapps.Models
{
    public class ToDoListViewModel
    {
        public List<ToDoViewModel> ToDos { get; set; } = new List<ToDoViewModel>();
        public string NewTask { get; set; }
    }

    public class ToDoViewModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }
}
