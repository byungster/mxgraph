function ResourceList(editorUi, container) {
    this.editorUi = editorUi;
    this.container = container;
};

ResourceList.prototype.labelIndex = 0;

ResourceList.prototype.currentIndex = 0;

ResourceList.prototype.showCloseButton = true;

ResourceList.prototype.inactiveTabBackgroundColor = '#f1f3f4';

ResourceList.prototype.init = function() {
    this.refresh();
};

ResourceList.prototype.clearSelectionState = function() {

};

ResourceList.prototype.getSelectionState = function () {

};

ResourceList.prototype.createSelectionState = function () {

};

ResourceList.prototype.initSelectionState = function () {

};

ResourceList.prototype.updateSelectionStateForCell = function () {

};

ResourceList.prototype.clear = function () {

};

ResourceList.prototype.refresh = function (newChild) {
    this.clear();

    var div = document.createElement('div');
    div.style.whiteSpace = 'nowrap';
    div.style.color = 'rgb(112, 112, 112)';
    div.style.cursor = 'default';

    var resource_list = [
        {
            label : "Ditribution List",
            head : ["List Name", "# of Contacts", "Detail"],
            body : [
                    ["First List", "28", ["Created Date : 01/19/2016", "# of Mobile : 45", "# of Email : 11", "Description : This list is initial Contact List."] ],
                    ["AAES", "50", ["Created Date : 03/09/2016", "# of Mobile : 45", "# of Email : 11", "Description : This list is second Contact List."]],
                    ["Market LDSA", "31", ["Created Date : 03/09/2016", "# of Mobile : 15", "# of Email : 11", "Description : This list is second Contact List."]],
                    ["Texas LDSA", "50", ["Created Date : 06/07/2019", "# of Mobile : 54", "# of Email : 11", "Description : This list is second Contact List."]]
            ]

        },
        {
            label : "Mobile Keyword",
            head : ["Keyword Name", "# of Signup", "Detail"],
            body : [
                ["showbhkim", "28", ["Created Date : 01/19/2016", "# of Signup : 45", "# of Email : 11", "Description : This list is initial Contact List."] ],
                ["AAES", "50", ["Created Date : 03/09/2016", "# of Signup : 45", "# of Email : 11", "Description : This list is second Contact List."]],
                ["Mobile LDSA", "50", ["Created Date : 06/07/2019", "# of Signup : 54", "# of Email : 11", "Description : This list is second Contact List."]],
                ["Market LDSA", "31", ["Created Date : 03/09/2016", "# of Signup : 15", "# of Email : 11", "Description : This list is second Contact List."]]
            ]
        },
        {
            label : "Filter",
            head : ["Filter Name", "# of Used", "Detail"],
            body : [
                ["Wizard Filter", "28", ["Created Date : 01/19/2016", "# of Used : 45", "# of Email : 11", "Description : This list is initial Contact List."] ],
                ["Filter LDSA", "31", ["Created Date : 03/09/2016", "# of Used : 15", "# of Email : 11", "Description : This list is second Contact List."]],
                ["Texas LDSA", "50", ["Created Date : 06/07/2019", "# of Used : 54", "# of Email : 11", "Description : This list is second Contact List."]],
                ["AAES", "50", ["Created Date : 03/09/2016", "# of Used : 45", "# of Email : 11", "Description : This list is second Contact List."]]
            ]
        },
        {
            label : "Message Template",
            head : ["Template Name", "# of Used", "Detail"],
            body : [
                ["Template 1", "28", ["Created Date : 01/19/2016", "# of Used : 45", "# of Email : 11", "Description : This list is initial Contact List."] ],
                ["First List", "50", ["Created Date : 03/09/2016", "# of Used : 45", "# of Email : 11", "Description : This list is second Contact List."]],
                ["LDSA Template", "31", ["Created Date : 03/09/2016", "# of Used : 15", "# of Email : 11", "Description : This list is second Contact List."]],
                ["Texas Template", "50", ["Created Date : 06/07/2019", "# of Used : 54", "# of Email : 11", "Description : This list is second Contact List."]]
            ]
        }
    ];




    var table = document.createElement('div');
    table.className = 'features-body';

    var rsc_cnt = resource_list.length;
    for ( var i = 0 ; i < rsc_cnt ; i++ ) {
        var button_label = resource_list[i]['label'];


        var button = document.createElement('button');
        button.className = 'collapsible';
        mxUtils.write(button, button_label);

        var group = document.createElement('div');
        group.className = 'tab_con';

        var groupHeader = document.createElement('div');
        groupHeader.className = 'table_top';
        var ul = document.createElement('ul');
        var li1 = document.createElement('li');
        li1.style.width = '50%';
        mxUtils.write(li1, resource_list[i]['head'][0]);
        var li2 = document.createElement('li');
        li2.style.width = '30%';
        mxUtils.write(li2, resource_list[i]['head'][1]);
        var li3 = document.createElement('li');
        li3.style.width = '20%';
        mxUtils.write(li3, resource_list[i]['head'][2]);
        ul.appendChild(li1);
        ul.appendChild(li2);
        ul.appendChild(li3);
        groupHeader.appendChild(ul);

        var groupBody = document.createElement('div');
        groupBody.className = 'table_cont';

        var body_cnt = resource_list[i]['body'].length;
        for (var j = 0 ; j < body_cnt ; j++ ) {
            var ul2 = document.createElement('ul');
            var li1 = document.createElement('li');
            li1.style.width = '50%';
            mxUtils.write(li1, resource_list[i]['body'][j][0]);
            var li2 = document.createElement('li');
            li2.style.width = '30%';
            mxUtils.write(li2, resource_list[i]['body'][j][1]);
            var li3 = document.createElement('li');
            li3.style.width = '20%';
            var li3a = document.createElement('a');
            mxUtils.write(li3a, 'Detail');
            li3.appendChild(li3a);
            var li3a_div = document.createElement('div');
            li3a_div.className = 'acc_con';
            li3a.appendChild(li3a_div);
            var li3a_div_ul = document.createElement('ul');
            li3a_div.appendChild(li3a_div_ul);
            var li3a_div_li1 = document.createElement('ul');
            mxUtils.write(li3a_div_li1, resource_list[i]['body'][j][2][0]);
            var li3a_div_li2 = document.createElement('ul');
            mxUtils.write(li3a_div_li2, resource_list[i]['body'][j][2][1]);
            var li3a_div_li3 = document.createElement('ul');
            mxUtils.write(li3a_div_li3, resource_list[i]['body'][j][2][2]);
            var li3a_div_li4 = document.createElement('ul');
            mxUtils.write(li3a_div_li4, resource_list[i]['body'][j][2][3]);
            li3a_div_ul.appendChild(li3a_div_li1);
            li3a_div_ul.appendChild(li3a_div_li2);
            li3a_div_ul.appendChild(li3a_div_li3);
            li3a_div_ul.appendChild(li3a_div_li4);

            ul2.appendChild(li1);
            ul2.appendChild(li2);
            ul2.appendChild(li3);

            groupBody.appendChild(ul2);

            //todo : Draggable로 만들기!
            var dragElt = document.createElement('div');
            dragElt.style.border = 'dashed black 1px';
            dragElt.style.width = '40px';
            dragElt.style.height = '40px';




            var ds = mxUtils.makeDraggable(ul2, function (evt) {

                //Drag -ing

                var select_box = document.getElementById('select_keyword');
                if ( select_box ) {
                    select_box.style.border = '2px dotted #1fa9ff';
                    select_box.style.height = '30px';
                }

            }, function () {

                //Drag Enter

                console.log("end");
            }, li1, null, null, true);

            ds.mouseUp = function (evt) {

                var select_box = document.getElementById('select_keyword');
                if ( select_box ) {
                    select_box.style.border = '';
                    select_box.style.height = '17px';
                }

                //Drop 할꺼임
                if (this.currentGraph != null)
                {
                    if (this.currentPoint != null && (this.previewElement == null ||
                        this.previewElement.style.visibility != 'hidden'))
                    {
                        var scale = this.currentGraph.view.scale;
                        var tr = this.currentGraph.view.translate;
                        var x = this.currentPoint.x / scale - tr.x;
                        var y = this.currentPoint.y / scale - tr.y;

                        this.drop(this.currentGraph, evt, this.currentDropTarget, x, y);
                    }

                    this.dragExit(this.currentGraph);
                    this.currentGraph = null;
                }

                //Drag 취소
                this.stopDrag();
                this.removeListeners();

                mxEvent.consume(evt);
            };

            console.log(ds.mouseUpHandler);
        }

        group.appendChild(groupHeader);
        group.appendChild(groupBody);

        table.appendChild(button);
        table.appendChild(group);


        button.addEventListener("click", function() {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (this.classList.value.indexOf("active") != -1 ) {
                content.style.height = "200px";
            } else {
                content.style.height = "0px";
            }
        });

    }

    div.appendChild(table);

    this.container.appendChild(div);


    //
    // mxEvent.addListener(ul, 'click', function(evt){
    //     var elt_a_list = ul.getElementsByTagName("a");
    //     var elt_li_list = ul.getElementsByTagName("li");
    //     var elt_length = ul.getElementsByTagName("a").length;
    //
    //     if ( elt_a_list ) {
    //         for ( var i = 0 ; i < elt_length ; i++ ) {
    //             elt_a_list[i].className="";
    //             elt_li_list[i].className="";
    //         }
    //         evt.target.className = "active";
    //         evt.target.parentElement.className = "active";
    //
    //         //변경되면, container도 바꾼다.
    //         if (evt.target.text === 'Feature') {
    //             featureContainer.style.display = '';
    //             templatesContainer.style.display = 'none';
    //         } else if ( evt.target.text === 'Templates') {
    //             featureContainer.style.display = 'none';
    //             templatesContainer.style.display = '';
    //         }
    //     }
    // });









};


