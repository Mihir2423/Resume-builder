var system_currency=$('#system_currency').val();
var count=$('#count').val();
var option_count=0;
var count_reference_ranges=$('#count_reference_ranges').val();
var count_comments=$('#count_comments').val();

(function($){

    "use strict";

    //active
    $('#tests').addClass('active');

    //tests datatable
    
    
    // text editor
    $('.components').find('textarea').summernote({
      tabsize: 4,
      heigt:100,
      tooltip: false,
      dialogsFade: true,
      toolbar: []
    });

    //components

    $('.add_component').on('click',function(){
            count++;
            $('.components .items').append(`
            <tr id="component_`+count+`" num="`+count+`">
               <td>
                    <div class="form-group">
                        <input type="text" class="form-control" name="component[`+count+`][name]" placeholder="Component" required>
                    </div>
               </td>
               <td>
                    <div class="form-group">
                        <input type="text" class="form-control" name="component[`+count+`][unit]" placeholder="Unit">
                    </div>
               </td>
               <td>
                    <ul class="p-0 list-style-none">
                        <li>
                            <input class="select_type" value="text" type="radio" name="component[`+count+`][type]" id="text_`+count+`"  required> <label for="text_`+count+`">Text</label>
                        </li>
                        <li>
                            <input class="select_type" value="select" type="radio" name="component[`+count+`][type]" id="select_`+count+`"  required> <label for="select_`+count+`">Select</label>
                        </li>
                    </ul>
                    <div class="options">
                    </div>
               </td>
               <td>
                  <table class="table table-bordered reference_range">
                    <thead>
                      <tr>
                        <th class="gender text-center">Gender</th>
                        <th class="age_unit text-center">Age Unit</th>
                        <th class="age_from text-center">Age</th>
                        <th class="age text-center">Critical Low</th>
                        <th class="age text-center">Normal</th>
                        <th class="age text-center">Critical High</th>
                        <th width="10px" class="text-center">
                          <button type="button" class="btn btn-sm btn-primary add_range">
                            <i class="fa fa-plus"></i>
                          </button>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                    </tbody>
                  </table>
                  <textarea class="form-control" name="component[`+count+`][reference_range]" placeholder="Refrence Range"></textarea>
               </td>
               <td class="text-center">
                    <input class="check_separated" num="`+count+`" type="checkbox" name="component[`+count+`][separated]">
                    <div class="component_price">
                    </div>
               </td>
               <td class="text-center">
                    <input  type="checkbox" name="component[`+count+`][status]">
                </td>
               <td>
                    <button type="button" class="btn btn-danger delete_row">
                        <i class="fa fa-trash"></i>
                    </button>
               </td>
            </tr>
            `);
            //initialize text editor
            $('#component_'+count).find('textarea').summernote({
                tabsize: 4,
                heigt:100,
                tooltip: false,
                dialogsFade: true,
                toolbar: []
            });
    });

    //add title
    $('.add_title').on('click',function(){
        count++;
        $('.components .items').append(`
          <tr num="`+count+`" id="component_`+count+`">
           <td>
              <input type="text" class="form-control" placeholder="Test Code">
           </td>
            <td colspan="2">
               <div class="form-group">
                    <input type="hidden" name="component[`+count+`][title]" value="true">
                    <input type="text" class="form-control" name="component[`+count+`][name]" placeholder="Test Name" required>
               </div>
            </td>
            
            <td>
            <input type="text" class="form-control" placeholder="Specimen Source">
            </td>
           
            <td>
            <input type="text" class="form-control" placeholder="Collection Method">
            </td>
            <td>
                <button type="button" class="btn btn-danger delete_row">
                    <i class="fa fa-trash"></i>
                </button>
            </td>
          </tr>
        `);

        $('#component_'+count+' input').focus();
    });

    //delete test component
    $(document).on('click','.delete_row',function(){
        var test_id=$(this).closest('tr').attr('test_id');
        var el=$(this);

        swal({
          title: "Are you sure to delete component ?",
          type: "warning",
          showCancelButton: true,
          confirmButtonClass: "btn-danger",
          confirmButtonText: "Delete",
          cancelButtonText: "Cancel",
          closeOnConfirm: true
        },
        function(){
          if(test_id!==undefined)
          {
            $.ajax({
              url:ajax_url('delete_test/'+test_id),
              beforeSend:function()
              {
                 $('.preloader').show();
                 $('.loader').show();
              },
              success:function()
              {
                $(el).parent().parent().remove();
              },
              complete:function(){
                $('.preloader').hide();
                $('.loader').hide();
              }
            });
          }
          else{
            $(el).parent().parent().remove();
          }
          
        });

    });

    //check if selected components
    $('#test_form').on('submit',function(){
      var count_components=$('.components tbody tr').length;

      if(count_components==0)
      {
        toastr.error('Please select at least one test component'),('Failed');
        return false;
      }

    });

    //delete test
    $(document).on('click','.delete_test',function(e){
        e.preventDefault();
        var el=$(this);
        swal({
          title: "Are you sure to delete test ?",
          type: "warning",
          showCancelButton: true,
          confirmButtonClass: "btn-danger",
          confirmButtonText: "Delete",
          cancelButtonText: "Cancel",
          closeOnConfirm: false
        },
        function(){
          $(el).parent().submit();
        });
    });

  //select type
  $(document).on('change','.select_type',function(){
    option_count++;
    var type=$(this).val();
    var component_num=$(this).parent().parent().parent().parent().attr('num');
    var html=`
     <table width="100%">
        <thead>
           <tr>
             <th>Option</th>
             <th width="10px">
              <button type="button" class="btn btn-primary btn-sm add_option">
                <i class="fa fa-plus"></i>
              </button>
             </th>
           </tr>
        </head>
        <tbody>
          <tr>
            <td>
              <input type="text" name="component[`+component_num+`][options][`+option_count+`]" class="form-control" required>
            </td>
            <td>
              <button type="button" class="btn btn-danger btn-sm delete_option">
                <i class="fa fa-trash"></i>
              </button>
            </td>
          </tr>
        </tbody>
     </table>
    `;
    if(type=='select')
    {
      $(this).parent().parent().next('.options').html(html);
    }
    else{
      $(this).parent().parent().next('.options').html('');
    }
  });
  
  //delete select option
  $(document).on("click",".delete_option",function(){
    var option_id=$(this).closest('tr').attr('option_id');
    var option=$(this);
    swal({
      title: "Are you sure to delete option ?",
      type: "warning",
      showCancelButton: true,
      confirmButtonClass: "btn-danger",
      confirmButtonText: "Delete",
      cancelButtonText: "Cancel",
      closeOnConfirm: true
    },
    function(){
      if(option_id!==undefined)
      {
        $.ajax({
          url:ajax_url('delete_option/'+option_id),
          beforeSend:function()
          {
            $('.preloader').show();
            $('.loader').show();
          },
          success:function()
          {
            $(option).parent().parent().remove();
          },
          complete:function(){
            $('.preloader').hide();
            $('.loader').hide();
          }
        });
      }
      else{
        $(option).parent().parent().remove();
      }
    });
  });

  //add option 
  $(document).on('click','.add_option',function(){
    option_count++;
    var component_num=$(this).parent().parent().parent().parent().parent().parent().parent().attr('num');
    var html=`<tr>
                <td>
                  <input type="text" name="component[`+component_num+`][options][`+option_count+`]" class="form-control" required>
                </td>
                <td>
                  <button type="button" class="btn btn-danger btn-sm delete_option">
                    <i class="fa fa-trash"></i>
                  </button>
                </td>
              </tr>`;
    $(this).parent().parent().parent().next('tbody').append(html);
  });

  //separated component
  $(document).on('change','.check_separated',function(){
    var checked=$(this).prop('checked');
    var num=$(this).attr('num');
    if(checked)
    {
      $(this).next('.component_price').html(`
        <div class="card card-primary card-outline">
          <div class="card-header">
            <h5 class="card-title">
              Price
            </h5>
          </div>
          <div class="card-body">
            <div class="input-group form-group mb-3">
                <input type="number" class="form-control" name="component[`+num+`][price]" min="0" class="price" required>
                <div class="input-group-append">
                  <span class="input-group-text">
                      `+system_currency+`
                  </span>
                </div>
            </div>
          </div>
        </div>
      `);
    }
    else{
      $(this).next('.component_price').html(``);
    }
  });

  //add new reference range
  $(document).on('click','.add_range',function(){
    count_reference_ranges++;
    var component_num=$(this).closest('tr').closest('table').closest('tr').attr('num');

    $(this).closest('table').find('tbody').append(`
    <tr>
      <td>
          <select class="form-control" name="component[`+component_num+`][reference_ranges][`+count_reference_ranges+`][gender]" required>
              <option value="both">Both</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
          </select>
      </td>
      <td>
          <select class="form-control" name="component[`+component_num+`][reference_ranges][`+count_reference_ranges+`][age_unit]" required>
              <option value="day">Days</option>
              <option value="month">Months</option>
              <option value="year">Years</option>
          </select>
      </td>
      <td class="text-center">
          <input type="number" name="component[`+component_num+`][reference_ranges][`+count_reference_ranges+`][age_from]" class="form-control" required>
          :
          <input type="number" name="component[`+component_num+`][reference_ranges][`+count_reference_ranges+`][age_to]" class="form-control" required>
      </td>
      <td class="text-center">
          <input type="number" name="component[`+component_num+`][reference_ranges][`+count_reference_ranges+`][critical_low_from]" class="form-control">
      </td>
      <td class="text-center">
          <input type="number" name="component[`+component_num+`][reference_ranges][`+count_reference_ranges+`][normal_from]" class="form-control">
          : 
          <input type="number" name="component[`+component_num+`][reference_ranges][`+count_reference_ranges+`][normal_to]" class="form-control">
      </td>
      <td class="text-center">
          <input type="number" name="component[`+component_num+`][reference_ranges][`+count_reference_ranges+`][critical_high_from]" class="form-control">
      </td>
      <td class="text-center">
          <button type="button" class="btn btn-sm btn-danger delete_range">
              <i class="fa fa-times"></i>
          </button>
      </td>
    </tr>
    `);
  });

  //delete reference range
  $(document).on('click','.delete_range',function(){
    $(this).closest('tr').remove();
  });

  //get category select2 intialize
  

  //add comment
  $(document).on('click','.add_comment',function(){
    count_comments++;
    $('#comments_table tbody').append(`
    <tr>
        <td>
          <div class="form-group">
              <textarea name="comments[`+count_comments+`]" class="form-control" id="" cols="30" rows="3" required></textarea>
          </div>
        </td>
        <td>
            <button type="button" class="btn btn-danger btn-sm delete_comment">
                <i class="fa fa-trash"></i>
            </button>
        </td>
    </tr>
    `)
  });

  //delete comment
  $(document).on('click','.delete_comment',function(){
    $(this).closest('tr').remove();
  });

  //consumptions
  

  //add consumption
  $(document).on('click','.add_consumption',function(){
    consumption_count++;
    var test_id=$(this).attr('test_id');
    $(this).parent().parent().find('.test_consumptions').append(`
      <tr class="consumption_row">
        <td>
          <div class="form-group">
            <select class="form-control" id="consumption_product_`+consumption_count+`" name="consumption[`+test_id+`][`+consumption_count+`][product_id]" required>
            </select>
          </div>
        </td>
        <td>
          <div class="form-group">
            <input type="number" class="form-control" name="consumption[`+test_id+`][`+consumption_count+`][quantity]" placeholder="Quantity" value="0" required>
          </div>
        </td>
        <td>
          <button type="button" class="btn btn-sm btn-danger delete_consumption">
            <i class="fa fa-trash"></i>
          </button>
        </td> 
      </tr>
    `);

    
  });

  //delete consumption
  $(document).on('click','.delete_consumption',function(){
    $(this).closest('.consumption_row').remove();
  });

})(jQuery);

