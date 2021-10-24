<?php
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;
class AddDocumentForeignKeys extends Migration
{
    public function up()
    {
        Schema::table('documents', function (Blueprint $table) {
            $table->foreign('user_id')->references('id')->on('users');
            $table->foreign('group_id')->references('id')->on('groups');
        });
    }
    public function down()
    {
        Schema::table('documents', function (Blueprint $table) {
            $table->dropForeign('user_id');
            $table->dropForeign('group_id');
        });
    }
}
