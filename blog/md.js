// tiny markdown renderer
// supports: # headings, **bold**, *italic*, `inline code`,
// ```code blocks```, > blockquotes, [links](url), - lists, paragraphs

function renderMarkdown(src) {
    var html = '';
    var lines = src.split('\n');
    var i = 0;

    while (i < lines.length) {
        var line = lines[i];

        // skip empty lines
        if (line.trim() === '') { i++; continue; }

        // code block
        if (line.trim().startsWith('```')) {
            var code = '';
            i++;
            while (i < lines.length && !lines[i].trim().startsWith('```')) {
                code += escHtml(lines[i]) + '\n';
                i++;
            }
            i++; // skip closing ```
            html += '<pre>' + code.replace(/\n$/, '') + '</pre>\n';
            continue;
        }

        // heading
        var hMatch = line.match(/^(#{1,3})\s+(.*)/);
        if (hMatch) {
            var level = hMatch[1].length;
            html += '<h' + level + '>' + inline(hMatch[2]) + '</h' + level + '>\n';
            i++;
            continue;
        }

        // blockquote
        if (line.trim().startsWith('> ')) {
            var bq = '';
            while (i < lines.length && lines[i].trim().startsWith('> ')) {
                bq += lines[i].trim().slice(2) + ' ';
                i++;
            }
            html += '<blockquote><p>' + inline(bq.trim()) + '</p></blockquote>\n';
            continue;
        }

        // unordered list
        if (line.match(/^\s*[-*]\s+/)) {
            html += '<ul>\n';
            while (i < lines.length && lines[i].match(/^\s*[-*]\s+/)) {
                html += '<li>' + inline(lines[i].replace(/^\s*[-*]\s+/, '')) + '</li>\n';
                i++;
            }
            html += '</ul>\n';
            continue;
        }

        // paragraph (collect consecutive non-empty, non-special lines)
        var para = '';
        while (i < lines.length && lines[i].trim() !== '' &&
               !lines[i].trim().startsWith('#') &&
               !lines[i].trim().startsWith('```') &&
               !lines[i].trim().startsWith('> ') &&
               !lines[i].match(/^\s*[-*]\s+/)) {
            para += lines[i] + ' ';
            i++;
        }
        html += '<p>' + inline(para.trim()) + '</p>\n';
    }

    return html;
}

function escHtml(s) {
    return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function inline(s) {
    s = escHtml(s);
    // links [text](url)
    s = s.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
    // inline code
    s = s.replace(/`([^`]+)`/g, '<code>$1</code>');
    // bold
    s = s.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
    // italic
    s = s.replace(/\*([^*]+)\*/g, '<em>$1</em>');
    return s;
}
