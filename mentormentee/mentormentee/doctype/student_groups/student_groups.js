// Copyright (c) 2021, SDC and contributors
// For license information, please see license.txt

frappe.ui.form.on('Civil Student Groups', {
	refresh: function(frm) {

		cur_frm.fields_dict['link'].get_query = function(doc) {
			return {
				filters: {
					"branch": 'Civil Engineering'
				}
			}
		}
		cur_frm.add_fetch("link", "full_name", "full_name");
		cur_frm.add_fetch("link", "student_id", "student_id");
		cur_frm.add_fetch("link", "branch", "branch");
		cur_frm.add_fetch("link", "photo", "photo");
	 }
});


frappe.ui.form.on("Student Groups", "branch", function(frm) {
	
	if(frm.doc.branch == "Civil Engineering")
	{
	  set_field_options("group", ["Bangalore","Mysore"]);
	}
	else if(frm.doc.branch == "Information Tehcnology")
	{
	  set_field_options("group", ["Mumbai","Pune"])
	}
	else if(frm.doc.branch == "")
	{
	  set_field_options("group", ["","Bangalore","Mysore","Mumbai","Pune"])
	}
	});
