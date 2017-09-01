using iTechArtProject_.Net_.Migrations;
using Microsoft.AspNetCore.Builder;
public static class TokenExtensions
{
    public static IApplicationBuilder CheckToken(this IApplicationBuilder builder)
    {
        return builder.UseMiddleware<TokenMiddleware>();
    }
}
