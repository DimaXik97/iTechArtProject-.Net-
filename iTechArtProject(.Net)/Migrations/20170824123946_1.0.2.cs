using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;

namespace iTechArtProject.Net.Migrations
{
    public partial class _102 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "AnswerId",
                table: "UserTests",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_UserTests_AnswerId",
                table: "UserTests",
                column: "AnswerId");

            migrationBuilder.AddForeignKey(
                name: "FK_UserTests_Answers_AnswerId",
                table: "UserTests",
                column: "AnswerId",
                principalTable: "Answers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_UserTests_Answers_AnswerId",
                table: "UserTests");

            migrationBuilder.DropIndex(
                name: "IX_UserTests_AnswerId",
                table: "UserTests");

            migrationBuilder.DropColumn(
                name: "AnswerId",
                table: "UserTests");
        }
    }
}
