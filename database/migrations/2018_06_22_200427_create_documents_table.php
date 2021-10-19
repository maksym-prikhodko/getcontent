<?php
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;
class CreateDocumentsTable extends Migration
{
    public function up()
    {
        Schema::create('documents', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name')->index();
            $table->text('description');
            $table->schemalessAttributes('fields');
            $table->schemalessAttributes('model');
            $table->integer('group_id')->index();
            $table->integer('user_id')->index();
            $table->dateTime('published_at')->index();
            $table->timestamps();
        });
    }
    public function down()
    {
        Schema::dropIfExists('documents');
    }
}
