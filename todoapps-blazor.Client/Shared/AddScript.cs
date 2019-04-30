using Microsoft.AspNetCore.Components;
using Microsoft.AspNetCore.Components.RenderTree;

namespace todoapps_blazor.Client.Shared
{
    public class AddScript : ComponentBase
    {

        [Parameter]
        private string Source { get; set; }

        [Parameter]
        private string Type { get; set; } = "text/javascript";

        protected override void BuildRenderTree(RenderTreeBuilder builder)
        {
            builder.OpenElement(0, "script");
            builder.AddAttribute(1, "src", Source);
            builder.AddAttribute(2, "type", Type);
            builder.CloseElement();
        }
    }
}
