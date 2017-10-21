var word = [];

word['boy'] = 'ولد';
word['brother'] = 'أخ';
word['child'] = 'طفل';
word['engagement'] = 'خطوبة';
word['family'] = 'عائلة';
word['father'] = 'أب';
word['girl'] = 'بنت';
word['grandfather'] = 'جد';
word['groom'] = 'عريس';
word['husband'] = 'زوج';
word['infant'] = 'رضيع';
word['man'] = 'رجل - ذكر';
word['maternal_uncle'] = 'عم';
word['mother'] = 'ام - أم';
word['nation'] = 'شعب';
word['old_man'] = 'عجوز - شيخ - كبير في السن';
word['old_woman'] = 'أمرأة عجوزة';
word['paternal_uncle'] = 'خال';
word['people'] = 'ناس';
word['relatives'] = 'أقارب';
word['son'] = 'ابن';
word['twin'] = 'تؤام';
word['woman'] = 'امراءة - انثى - أنثى';
word['young_man'] = 'شاب';


var w;
var wordtable = document.getElementById('searchTableBody');
for (w in word )
{
    var ws = w + ".gif";
    wordtable.innerHTML += "<tr><td onclick=\"showWordsModal('" + ws + "','" + word[w] + "')\">" + word[w] + "</td></tr>";
}