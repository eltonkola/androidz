package com.eltonkola.bufi

class SnippetInput (val title: String, val description: String, var fileName: String = "")

class FullSnippetOutput (val title: String, val description: String, val link: String)

class QuickSnippetOutput (val title: String, val id: String)


fun SnippetInput.toQuick() : QuickSnippetOutput {
    return QuickSnippetOutput(this.title, this.fileName)
}

fun SnippetInput.toFull() : FullSnippetOutput {
    return FullSnippetOutput(this.title, this. description, "http://www.androidz.dev/snippet/${this.fileName}")
}
