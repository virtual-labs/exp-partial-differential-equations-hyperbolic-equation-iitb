let maindiv = (document.getElementById('pannelcreate'));
function activity1() {
    let text = `
    <div class='divide'>
        <div style='margin-top: 2vw;'>
            <br>
            <h4 class="center-text fs-20px fw-600">PDE: Hyperbolic Equation</h4>
            <br>
            <button class='btn btn-info std-btn' style='position: relative; left: 50vw;' onclick='start_act1();' id='temp-btn-1' >Next</button>
        </div>
    </div>`;
    maindiv.innerHTML = text;
    setTimeout(() => {
        MathJax.typeset();
    }, 300);
    internal_calculation1();
}
function start_act1() {
    let temp_btn = (document.getElementById('temp-btn-1'));
    if (temp_btn) {
        temp_btn.remove();
    }
    let btn_text = get_collapse_btn_text('Activity 1', 'act1-div');
    let text = `
   ${btn_text}
   <div class='collapse center-text divide fs-18px fb-500' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='act1-div'>
      <p style='text-align:left;'>
         Solution to hyperbolic equation.
      </p>

      <div>
         $$
         a^2\\frac{\\partial^2u}{\∂ x^2} - \\frac{\∂^2 u}{\∂ t^2} = 0
         $$
         $$
         ${Math.pow(a, 2)}\\frac{\\partial^2u}{\∂ x^2} - \\frac{\∂^2 u}{\∂ t^2} = 0
         $$
         <div>
      
      <p style="text-align:left;">
         Given that,
      </p>
      $$ u(0,t) = 0, u(5,t) = 0, u(x,0) = x^{${p}}(5-x) $$
      <p style="text-align:left;">by initial condition</p>
      $$ \\frac{\∂ u}{\∂ y} = 0 $$
      <p style="text-align:left;">Find, distribution of u at t = ${parseFloat(dist_at.toFixed(2))}</p>
   </div>
      
   <br>
      
   <div>
      <p style="text-align:left;">For second row using,</p>
      $$\\frac{\∂ u}{\∂ y} = 0 $$
      <p style="text-align:left;">we can rewrite the equation as,</p>
      $$ u_{i+1,j} = \\frac{u_{i,j+1} + u_{i,j-1}}{2} $$
      <br>
      <svg viewBox="-300 0 1050 300">
         <!-- Circles -->
         <circle cx="50" cy="50" r="50" stroke="white" stroke-width="2" fill="black" />
         <circle cx="250" cy="50" r="50" stroke="white" stroke-width="2" fill="black" />
         <circle cx="450" cy="50" r="50" stroke="white" stroke-width="2" fill="black" />
         <circle cx="250" cy="200" r="50" stroke="white" stroke-width="2" fill="black" />

         <!-- Lines -->
         <line x1="75" y1="50" x2="225" y2="50" style="stroke:black;stroke-width:2" />
         <line x1="275" y1="50" x2="425" y2="50" style="stroke:black;stroke-width:2" />
         <line x1="250" y1="75" x2="250" y2="175" style="stroke:black;stroke-width:2" />

         <!-- Text -->
         <text x="50" y="50" fill="white" style="font-size:30px;" text-anchor="middle" dy=".3em">u<tspan
            baseline-shift="sub" style="font-size:20px;">i,j-1</tspan></text>
         
         <text x="250" y="50" fill="white" style="font-size:30px;" text-anchor="middle" dy=".3em">u<tspan
            baseline-shift="sub" style="font-size:20px;">i,j</tspan></text>
      
         <text x="450" y="50" fill="white" style="font-size:30px;" text-anchor="middle" dy=".3em">u<tspan
            baseline-shift="sub" style="font-size:20px;">i,j+1</tspan></text>
      
         <text x="250" y="200" fill="white" style="font-size:30px;" text-anchor="middle" dy=".3em">u<tspan
            baseline-shift="sub" style="font-size:20px">i+1,j</tspan></text>
      </svg>
   </div>
   <br>
   <div>
      <p style="text-align:left;">For all the remaining rows</p>
      $$ u_{i+1,j} = u_{i,j+1} + u_{i,j-1} - u_{i-1,j} $$
      <br>
      <svg viewBox="-300 0 1050 450">
         <!-- Circles -->
         <circle cx="250" cy="50" r="50" stroke="white" stroke-width="2" fill="black" />
         <circle cx="50" cy="200" r="50" stroke="white" stroke-width="2" fill="black" />
         <circle cx="250" cy="200" r="50" stroke="white" stroke-width="2" fill="black" />
         <circle cx="450" cy="200" r="50" stroke="white" stroke-width="2" fill="black" />
         <circle cx="250" cy="350" r="50" stroke="white" stroke-width="2" fill="black" />

         <!-- Lines -->
         <line x1="250" y1="75" x2="250" y2="175" style="stroke:black;stroke-width:2" />
         <line x1="75" y1="200" x2="225" y2="200" style="stroke:black;stroke-width:2" />
         <line x1="275" y1="200" x2="425" y2="200" style="stroke:black;stroke-width:2" />
         <line x1="250" y1="225" x2="250" y2="325" style="stroke:black;stroke-width:2" />

         <!-- Text -->
         <text x="250" y="50" fill="white" style="font-size:30px;" text-anchor="middle" dy=".3em">u<tspan
            baseline-shift="sub" style="font-size:20px;">i-1,j</tspan></text>

         <text x="50" y="200" fill="white" style="font-size:30px;" text-anchor="middle" dy=".3em">u<tspan
            baseline-shift="sub" style="font-size:20px;">i,j-1</tspan></text>
         
         <text x="250" y="200" fill="white" style="font-size:30px;" text-anchor="middle" dy=".3em">u<tspan
            baseline-shift="sub" style="font-size:20px;">i,j</tspan></text>
      
         <text x="450" y="200" fill="white" style="font-size:30px;" text-anchor="middle" dy=".3em">u<tspan
            baseline-shift="sub" style="font-size:20px;">i,j+1</tspan></text>
      
         <text x="250" y="350" fill="white" style="font-size:30px;" text-anchor="middle" dy=".3em">u<tspan
            baseline-shift="sub" style="font-size:20px">i+1,j</tspan></text>
      </svg>
   </div>
         $$ h = 1 $$
         $$ k = \\frac{h}{a} $$
      </div>
      
      <div id="act1-k-div">
         <br>
         k = <span style="display:inline-block;"> <input type='number' id='act1-k-inp' class='form-control fs-16px' /> </span>
         <br>
         <br>
         <button class='btn btn-info btn-sm std-btn' onclick='a1_verify_k();' id='act1-vf-btn1'>Verify</button>
      </div>
         
   </div>`;
    maindiv.innerHTML += text;
    hide_all_steps();
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
    setTimeout(() => {
        show_step('act1-div');
    }, 150);
}
function a1_verify_k() {
    let k_inp = (document.getElementById('act1-k-inp'));
    console.log(k);
    if (!verify_values(parseFloat(k_inp.value), k)) {
        k_inp.style.border = '1px solid red';
        alert('Incorrect k value');
        return;
    }
    else {
        k_inp.style.border = '1px solid #ced4da';
        k_inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act1-k-div'));
    div.innerHTML = '';
    div.innerHTML = `
   $$ k = ${parseFloat(k.toFixed(2))} $$
   <div id="act1-tb-box">
   </div>
   `;
    let header = ['x&rarr; \\ t&darr;', '0', '1', '2', '3', '4', '5'];
    let vf_rows = [];
    let vf_cols = [];
    let tb_box = (document.getElementById('act1-tb-box'));
    if (table_data.length > 2) {
        vf_rows = [0, 1, 2, 3];
        vf_cols = [
            [2, 3, 4, 5],
            [2, 3, 4, 5],
            [2, 3, 4, 5],
            [2, 3, 4, 5],
        ];
    }
    else {
        vf_rows = [0, 1, 2, 3];
        vf_cols = [
            [2, 3, 4, 5],
            [2, 3, 4, 5],
            [2, 3, 4, 5],
            [2, 3, 4, 5],
        ];
    }
    let tab = new Verify_Rows_Cols_Custom_Fixed_Update1(header, table_data, vf_rows, vf_cols, '', tb_box, true, true, exp_complete, 3);
    tab.load_table();
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function internal_calculation1() {
    let n;
    let t = 0;
    p = 0;
    a = 0;
    k = 0;
    table_data = [];
    p = random1(1, 5);
    a = random1(2, 6);
    k = h / a;
    console.log(a, k);
    if (1.25 % k != 0) {
        let temp1 = 0;
        while (temp1 < 1.25) {
            temp1 += k;
        }
        let temp2 = temp1 - k;
        if (Math.abs(1.25 - temp1) <= Math.abs(1.25 - temp2)) {
            dist_at = temp1;
        }
        else {
            dist_at = temp2;
        }
        n = dist_at / k + 1;
        for (let i = 0; i < n; i++) {
            let arr = [];
            for (let j = 0; j <= 6; j++) {
                if (j == 0) {
                    arr.push(t);
                    t += k;
                }
                else if (j == 1 || j == 6) {
                    arr.push(0);
                }
                else if (i == 0) {
                    arr.push(Math.pow((j - 1), p) * (5 - (j - 1)));
                }
                else if (i == 1) {
                    arr.push((table_data[i - 1][j - 1] + table_data[i - 1][j + 1]) /
                        2);
                }
                else {
                    arr.push(table_data[i - 1][j + 1] +
                        table_data[i - 1][j - 1] -
                        table_data[i - 2][j]);
                }
            }
            table_data.push(arr);
        }
    }
    else {
        n = dist_at / k + 1;
        for (let i = 0; i < n; i++) {
            let arr = [];
            for (let j = 0; j <= 6; j++) {
                if (j == 0) {
                    arr.push(t);
                    t += k;
                }
                else if (j == 1 || j == 6) {
                    arr.push(0);
                }
                else if (i == 0) {
                    arr.push(Math.pow((j - 1), p) * (5 - (j - 1)));
                }
                else if (i == 1) {
                    arr.push((table_data[i - 1][j - 1] + table_data[i - 1][j + 1]) /
                        2);
                }
                else {
                    arr.push(table_data[i - 1][j + 1] +
                        table_data[i - 1][j - 1] -
                        table_data[i - 2][j]);
                }
            }
            table_data.push(arr);
        }
    }
}
function exp_complete() {
    alert('Experiment Completed');
}
activity1();
//# sourceMappingURL=activity1.js.map