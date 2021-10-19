<?php
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;
class CreateGroupsTable extends Migration
{
    public function up()
    {
        Schema::create('groups', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name')->index();
            $table->text('description');
            $table->schemalessAttributes('model');
            $table->nestedSet();
            $table->timestamps();
        });
    }
    public function down()
    {
        Schema::table('groups', function (Blueprint $table) {
            $table->dropNestedSet();
        });
        Schema::dropIfExists('documents');
    }
}
