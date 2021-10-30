<?php
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;
class CreateDocumentLinksTable extends Migration
{
    public function up()
    {
        Schema::create('document_links', function (Blueprint $table) {
            $table->unsignedInteger('document_id')->index();
            $table->unsignedInteger('linked_document_id')->index();
            $table->timestamps();
            $table->foreign('document_id')->references('id')->on('documents')->onDelete('cascade');
            $table->foreign('linked_document_id')->references('id')->on('documents')->onDelete('cascade');
        });
    }
    public function down()
    {
        Schema::dropIfExists('document_links');
    }
}
