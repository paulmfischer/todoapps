using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using todoapps.Models;

namespace todoapps.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult VanillaJS()
        {
            return View();
        }

        public IActionResult VueJS()
        {
            return View();
        }

        [HttpGet]
        public IActionResult Razor()
        {
            return View(new ToDoListViewModel());
        }

        [HttpPost]
        public IActionResult Razor(ToDoListViewModel toDoListViewModel)
        {
            var newItem = new ToDoViewModel
            {
                Id = toDoListViewModel.ToDos.Count > 0 ? toDoListViewModel.ToDos[toDoListViewModel.ToDos.Count - 1].Id : 0,
                Name = toDoListViewModel.NewTask
            };

            toDoListViewModel.NewTask = string.Empty;
            toDoListViewModel.ToDos.Add(newItem);
            return View(toDoListViewModel);
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
