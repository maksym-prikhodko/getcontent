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
            $table->string('slug')->index();
            $table->text('description')->nullable();
            $table->schemalessAttributes('schema')->nullable();
            $table->nestedSet();
            $table->softDeletes();
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
