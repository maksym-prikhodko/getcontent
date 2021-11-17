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
            $table->string('uuid', 36)->index();
            $table->string('name');
            $table->string('slug')->index();
            $table->text('description')->nullable();
            $table->schemalessAttributes('content')->default('{}');
            $table->schemalessAttributes('model')->nullable();
            $table->text('layout')->nullable();
            $table->unsignedInteger('owner_id')->nullable()->index();
            $table->unsignedInteger('group_id')->nullable()->index();
            $table->dateTime('published_at')->nullable()->index();
            $table->softDeletes();
            $table->timestamps();
        });
    }
    public function down()
    {
        Schema::dropIfExists('documents');
    }
}
