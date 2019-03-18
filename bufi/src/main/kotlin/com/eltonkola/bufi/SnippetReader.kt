package com.eltonkola.bufi

import com.google.gson.Gson
import java.io.File
import java.io.FileWriter
import java.lang.Exception

class SnippetReader {

    private val root = File("../../../snippets/")
    private val rootOutput = File("../../../api/")
    private val gson = Gson()

    fun generateSnippets() {
        println("init SnippetReader")

        println("root ${root.exists()} - ${root.absolutePath}")

        if(!rootOutput.exists()){
            rootOutput.mkdirs()
        }

        val snippets = root.walkTopDown().map { snippetFile ->
            if (!snippetFile.isDirectory) {
                println("snippet> ${snippetFile.name}")
                val snippet = readFile(snippetFile)
                snippet?.fileName = snippetFile.name
                 snippet
            }else{
                null
            }
        }.filterNotNull().toList()

        println("all snippets ${snippets.size}")

        val savedQuick = saveFile(snippets.map { it.toQuick() }, "quick.json")
        val savedFull = saveFile(snippets.map { it.toFull() },"full.json")

        if(savedQuick && savedFull) {
            println("!!!! DONE, Everything saved !!")
        }else{
            println("!!!! Something went wrong savedQuick: $savedQuick - savedFull: $savedFull !!")
        }

    }


    private fun saveFile(data: List<Any>, fileName: String) : Boolean {
        println("saveFullSnippets ${data.size}")
        return try {
            val writer = FileWriter(File(rootOutput.path, fileName))
            gson.toJson(data, writer)
            writer.close()
            true
        }catch (error: Exception){
            println("error ${error.message}")
            false
        }

    }

    private fun readFile(file: File) : SnippetInput?{
        return try {
            gson.fromJson(file.readText(), SnippetInput::class.java)
        }catch (error: Exception){
            println("error reading file ${error.message}")
            null
        }
    }


}