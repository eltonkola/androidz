package com.eltonkola.bufi

class BufiApp {

    companion object {
        @JvmStatic
        fun main(args: Array<String>) {
            val snippetReader = SnippetReader()
            snippetReader.generateSnippets()
        }
    }

}
