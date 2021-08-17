var inputs = ["para1_input_box_1", "para1_input_box_2", "para1_input_box_3", "para1_input_box_4", "para1_input_box_5", "para1_input_box_6"]; 
{
 

function getParagraph1()
 
  for (var i = 1; i <=6; i++)
    {
      inputs.push(document.getElementById("para1_input_box_" + i).value);
    }
  
  inputs.join(".");
  
  documents.getElementById("showParagraph1").innerHTML = inputs.join(". ")
}