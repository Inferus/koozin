import React, {useState} from 'react';
import black from "../images/hoodies/A/a__black_false_disabled_base-only.webp";
import white from "../images/hoodies/A/a__white_false_disabled_base-only.webp";
import grey from "../images/hoodies/A/a__grey_false_disabled_base-only.webp";

import a_b_apr_all from '../images/opt/A/apricot/a__black_true_apricot_all.png'
import a_w_apr_all from '../images/opt/A/apricot/a__white_true_apricot_all.png'
import a_g_apr_all from '../images/opt/A/apricot/a__grey_true_apricot_all.png'

import a_b_ban_all from '../images/opt/A/banana/a__black_true_banana_all.png'
import a_w_ban_all from '../images/opt/A/banana/a__white_true_banana_all.png'
import a_g_ban_all from '../images/opt/A/banana/a__grey_true_banana_all.png'

import a_b_ibi_all from '../images/opt/A/ibiza/a__black_true_ibiza_all.png'
import a_w_ibi_all from '../images/opt/A/ibiza/a__white_true_ibiza_all.png'
import a_g_ibi_all from '../images/opt/A/ibiza/a__grey_true_ibiza_all.png'

import a_b_man_all from '../images/opt/A/mango/a__black_true_mango_all.png'
import a_w_man_all from '../images/opt/A/mango/a__white_true_mango_all.png'
import a_g_man_all from '../images/opt/A/mango/a__grey_true_mango_all.png'

import a_b_pal_all from '../images/opt/A/pale pink/a__black_true_pale pink_all.png'
import a_w_pal_all from '../images/opt/A/pale pink/a__white_true_pale pink_all.png'
import a_g_pal_all from '../images/opt/A/pale pink/a__grey_true_pale pink_all.png'

import a_b_hea_all from '../images/opt/A/heavenly/a__black_true_heavenly_all.png'
import a_w_hea_all from '../images/opt/A/heavenly/a__white_true_heavenly_all.png'
import a_g_hea_all from '../images/opt/A/heavenly/a__grey_true_heavenly_all.png'

import a_b_pin_all from '../images/opt/A/pink happiness/a__black_true_pink happiness_all.png'
import a_w_pin_all from '../images/opt/A/pink happiness/a__white_true_pink happiness_all.png'
import a_g_pin_all from '../images/opt/A/pink happiness/a__grey_true_pink happiness_all.png'

import a_b_car_all from '../images/opt/A/caribbean/a__black_true_caribbeans_all.png'
import a_w_car_all from '../images/opt/A/caribbean/a__white_true_caribbeans_all.png'
import a_g_car_all from '../images/opt/A/caribbean/a__grey_true_caribbeans_all.png'

import a_b_tar_all from '../images/opt/A/tarragon/a__black_true_tarragon_all.png'
import a_w_tar_all from '../images/opt/A/tarragon/a__white_true_tarragon_all.png'
import a_g_tar_all from '../images/opt/A/tarragon/a__grey_true_tarragon_all.png'

import a_b_pop_all from '../images/opt/A/poppy/a__black_true_poppy_all.png'
import a_w_pop_all from '../images/opt/A/poppy/a__white_true_poppy_all.png'
import a_g_pop_all from '../images/opt/A/poppy/a__grey_true_poppy_all.png'

import b_b_ba_lr_all from '../images/opt/B/banana-apricot/b__black_l-r_banana-apricot_all.png'
import b_b_ba_io_all from '../images/opt/B/banana-apricot/b__black_i-o_banana-apricot_all.png'
import b_w_ba_lr_all from '../images/opt/B/banana-apricot/b__white_l-r_banana-apricot_all.png'
import b_w_ba_io_all from '../images/opt/B/banana-apricot/b__white_i-o_banana-apricot_all.png'
import b_g_ba_lr_all from '../images/opt/B/banana-apricot/b__grey_l-r_banana-apricot_all.png'
import b_g_ba_io_all from '../images/opt/B/banana-apricot/b__grey_i-o_banana-apricot_all.png'

import b_b_mi_lr_all from '../images/opt/B/mango-ibiza/b__black_l-r_mango-ibiza_all.png'
import b_b_mi_io_all from '../images/opt/B/mango-ibiza/b__black_i-o_mango-ibiza_all.png'
import b_w_mi_lr_all from '../images/opt/B/mango-ibiza/b__white_l-r_mango-ibiza_all.png'
import b_w_mi_io_all from '../images/opt/B/mango-ibiza/b__white_i-o_mango-ibiza_all.png'
import b_g_mi_lr_all from '../images/opt/B/mango-ibiza/b__grey_l-r_mango-ibiza_all.png'
import b_g_mi_io_all from '../images/opt/B/mango-ibiza/b__grey_i-o_mango-ibiza_all.png'

import b_b_pp_lr_all from '../images/opt/B/pale pink-heavenly/b__black_l-r_pale-pink-heavenly_all.png'
import b_b_pp_io_all from '../images/opt/B/pale pink-heavenly/b__black_i-o_pale-pink-heavenly_all.png'
import b_w_pp_lr_all from '../images/opt/B/pale pink-heavenly/b__white_l-r_pale-pink-heavenly_all.png'
import b_w_pp_io_all from '../images/opt/B/pale pink-heavenly/b__white_i-o_pale-pink-heavenly_all.png'
import b_g_pp_lr_all from '../images/opt/B/pale pink-heavenly/b__grey_l-r_pale-pink-heavenly_all.png'
import b_g_pp_io_all from '../images/opt/B/pale pink-heavenly/b__grey_i-o_pale-pink-heavenly_all.png'

import b_b_ph_lr_all from '../images/opt/B/pink happiness-caribbean/b__black_l-r_pink-happiness-caribbean_all.png'
import b_b_ph_io_all from '../images/opt/B/pink happiness-caribbean/b__black_i-o_pink-happiness-caribbean_all.png'
import b_w_ph_lr_all from '../images/opt/B/pink happiness-caribbean/b__white_l-r_pink-happiness-caribbean_all.png'
import b_w_ph_io_all from '../images/opt/B/pink happiness-caribbean/b__white_i-o_pink-happiness-caribbean_all.png'
import b_g_ph_lr_all from '../images/opt/B/pink happiness-caribbean/b__grey_l-r_pink-happiness-caribbean_all.png'
import b_g_ph_io_all from '../images/opt/B/pink happiness-caribbean/b__grey_i-o_pink-happiness-caribbean_all.png'

import b_b_tp_lr_all from '../images/opt/B/tarragon-poppy/b__black_l-r_tarragon-poppy_all.png'
import b_b_tp_io_all from '../images/opt/B/tarragon-poppy/b__black_i-o_tarragon-poppy_all.png'
import b_w_tp_lr_all from '../images/opt/B/tarragon-poppy/b__white_l-r_tarragon-poppy_all.png'
import b_w_tp_io_all from '../images/opt/B/tarragon-poppy/b__white_i-o_tarragon-poppy_all.png'
import b_g_tp_lr_all from '../images/opt/B/tarragon-poppy/b__grey_l-r_tarragon-poppy_all.png'
import b_g_tp_io_all from '../images/opt/B/tarragon-poppy/b__grey_i-o_tarragon-poppy_all.png'

import c_b_ba_lr_all from '../images/opt/C/banana-apricot/c__black_l-r_banana-apricot_all.png'
import c_b_ba_io_all from '../images/opt/C/banana-apricot/c__black_i-o_banana-apricot_all.png'
import c_w_ba_lr_all from '../images/opt/C/banana-apricot/c__white_l-r_banana-apricot_all.png'
import c_w_ba_io_all from '../images/opt/C/banana-apricot/c__white_i-o_banana-apricot_all.png'
import c_g_ba_lr_all from '../images/opt/C/banana-apricot/c__grey_l-r_banana-apricot_all.png'
import c_g_ba_io_all from '../images/opt/C/banana-apricot/c__grey_i-o_banana-apricot_all.png'

import c_b_mi_lr_all from '../images/opt/C/mango-ibiza/c__black_l-r_mango-ibiza_all.png'
import c_b_mi_io_all from '../images/opt/C/mango-ibiza/c__black_i-o_mango-ibiza_all.png'
import c_w_mi_lr_all from '../images/opt/C/mango-ibiza/c__white_l-r_mango-ibiza_all.png'
import c_w_mi_io_all from '../images/opt/C/mango-ibiza/c__white_i-o_mango-ibiza_all.png'
import c_g_mi_lr_all from '../images/opt/C/mango-ibiza/c__grey_l-r_mango-ibiza_all.png'
import c_g_mi_io_all from '../images/opt/C/mango-ibiza/c__grey_i-o_mango-ibiza_all.png'

import c_b_pp_lr_all from '../images/opt/C/pale pink-heavenly/c__black_l-r_pale-pink-heavenly_all.png'
import c_b_pp_io_all from '../images/opt/C/pale pink-heavenly/c__black_i-o_pale-pink-heavenly_all.png'
import c_w_pp_lr_all from '../images/opt/C/pale pink-heavenly/c__white_l-r_pale-pink-heavenly_all.png'
import c_w_pp_io_all from '../images/opt/C/pale pink-heavenly/c__white_i-o_pale-pink-heavenly_all.png'
import c_g_pp_lr_all from '../images/opt/C/pale pink-heavenly/c__grey_l-r_pale-pink-heavenly_all.png'
import c_g_pp_io_all from '../images/opt/C/pale pink-heavenly/c__grey_i-o_pale-pink-heavenly_all.png'

import c_b_ph_lr_all from '../images/opt/C/pink happiness-caribbean/c__black_l-r_pink-happiness-caribbean_all.png'
import c_b_ph_io_all from '../images/opt/C/pink happiness-caribbean/c__black_i-o_pink-happiness-caribbean_all.png'
import c_w_ph_lr_all from '../images/opt/C/pink happiness-caribbean/c__white_l-r_pink-happiness-caribbean_all.png'
import c_w_ph_io_all from '../images/opt/C/pink happiness-caribbean/c__white_i-o_pink-happiness-caribbean_all.png'
import c_g_ph_lr_all from '../images/opt/C/pink happiness-caribbean/c__grey_l-r_pink-happiness-caribbean_all.png'
import c_g_ph_io_all from '../images/opt/C/pink happiness-caribbean/c__grey_i-o_pink-happiness-caribbean_all.png'

import c_b_tp_lr_all from '../images/opt/C/tarragon-poppy/c__black_l-r_tarragon-poppy_all.png'
import c_b_tp_io_all from '../images/opt/C/tarragon-poppy/c__black_i-o_tarragon-poppy_all.png'
import c_w_tp_lr_all from '../images/opt/C/tarragon-poppy/c__white_l-r_tarragon-poppy_all.png'
import c_w_tp_io_all from '../images/opt/C/tarragon-poppy/c__white_i-o_tarragon-poppy_all.png'
import c_g_tp_lr_all from '../images/opt/C/tarragon-poppy/c__grey_l-r_tarragon-poppy_all.png'
import c_g_tp_io_all from '../images/opt/C/tarragon-poppy/c__grey_i-o_tarragon-poppy_all.png'

import d_b_ba_lr_all from '../images/opt/D/banana-apricot/d__black_l-r_banana-apricot_all.png'
import d_b_ba_io_all from '../images/opt/D/banana-apricot/d__black_i-o_banana-apricot_all.png'
import d_w_ba_lr_all from '../images/opt/D/banana-apricot/d__white_l-r_banana-apricot_all.png'
import d_w_ba_io_all from '../images/opt/D/banana-apricot/d__white_i-o_banana-apricot_all.png'
import d_g_ba_lr_all from '../images/opt/D/banana-apricot/d__grey_l-r_banana-apricot_all.png'
import d_g_ba_io_all from '../images/opt/D/banana-apricot/d__grey_i-o_banana-apricot_all.png'

import d_b_mi_lr_all from '../images/opt/D/mango-ibiza/d__black_l-r_mango-ibiza_all.png'
import d_b_mi_io_all from '../images/opt/D/mango-ibiza/d__black_i-o_mango-ibiza_all.png'
import d_w_mi_lr_all from '../images/opt/D/mango-ibiza/d__white_l-r_mango-ibiza_all.png'
import d_w_mi_io_all from '../images/opt/D/mango-ibiza/d__white_i-o_mango-ibiza_all.png'
import d_g_mi_lr_all from '../images/opt/D/mango-ibiza/d__grey_l-r_mango-ibiza_all.png'
import d_g_mi_io_all from '../images/opt/D/mango-ibiza/d__grey_i-o_mango-ibiza_all.png'

import d_b_pp_lr_all from '../images/opt/D/pale pink-heavenly/d__black_l-r_pale-pink-heavenly_all.png'
import d_b_pp_io_all from '../images/opt/D/pale pink-heavenly/d__black_i-o_pale-pink-heavenly_all.png'
import d_w_pp_lr_all from '../images/opt/D/pale pink-heavenly/d__white_l-r_pale-pink-heavenly_all.png'
import d_w_pp_io_all from '../images/opt/D/pale pink-heavenly/d__white_i-o_pale-pink-heavenly_all.png'
import d_g_pp_lr_all from '../images/opt/D/pale pink-heavenly/d__grey_l-r_pale-pink-heavenly_all.png'
import d_g_pp_io_all from '../images/opt/D/pale pink-heavenly/d__grey_i-o_pale-pink-heavenly_all.png'

import d_b_ph_lr_all from '../images/opt/D/pink happiness-caribbean/d__black_l-r_pink-happiness-caribbean_all.png'
import d_b_ph_io_all from '../images/opt/D/pink happiness-caribbean/d__black_i-o_pink-happiness-caribbean_all.png'
import d_w_ph_lr_all from '../images/opt/D/pink happiness-caribbean/d__white_l-r_pink-happiness-caribbean_all.png'
import d_w_ph_io_all from '../images/opt/D/pink happiness-caribbean/d__white_i-o_pink-happiness-caribbean_all.png'
import d_g_ph_lr_all from '../images/opt/D/pink happiness-caribbean/d__grey_l-r_pink-happiness-caribbean_all.png'
import d_g_ph_io_all from '../images/opt/D/pink happiness-caribbean/d__grey_i-o_pink-happiness-caribbean_all.png'

import d_b_tp_lr_all from '../images/opt/D/tarragon-poppy/d__black_l-r_tarragon-poppy_all.png'
import d_b_tp_io_all from '../images/opt/D/tarragon-poppy/d__black_i-o_tarragon-poppy_all.png'
import d_w_tp_lr_all from '../images/opt/D/tarragon-poppy/d__white_l-r_tarragon-poppy_all.png'
import d_w_tp_io_all from '../images/opt/D/tarragon-poppy/d__white_i-o_tarragon-poppy_all.png'
import d_g_tp_lr_all from '../images/opt/D/tarragon-poppy/d__grey_l-r_tarragon-poppy_all.png'
import d_g_tp_io_all from '../images/opt/D/tarragon-poppy/d__grey_i-o_tarragon-poppy_all.png'

import {selector} from "./Step1Swiper";
import SlidesArray from "./SlidesArray";
import SlidesCards from "./SlidesCards";
import {firstComplect} from "./Step2Swiper";

const black_ba_io_array = [c_b_ba_io_all, a_b_ban_all, b_b_ba_io_all, d_b_ba_io_all]
const black_ba_lr_array = [c_b_ba_lr_all, a_b_apr_all, b_b_ba_lr_all, d_b_ba_lr_all]
const white_ba_io_array = [c_w_ba_io_all, a_w_ban_all, b_w_ba_io_all, d_w_ba_io_all]
const white_ba_lr_array = [c_w_ba_lr_all, a_w_apr_all, b_w_ba_lr_all, d_w_ba_lr_all]
const grey_ba_io_array = [c_g_ba_io_all, a_g_ban_all, b_g_ba_io_all, d_g_ba_io_all]
const grey_ba_lr_array = [c_g_ba_lr_all, a_g_apr_all, b_g_ba_lr_all, d_g_ba_lr_all]

const black_mi_io_array = [c_b_mi_io_all, a_b_man_all, b_b_mi_io_all, d_b_mi_io_all]
const black_mi_lr_array = [c_b_mi_lr_all, a_b_ibi_all, b_b_mi_lr_all, d_b_mi_lr_all]
const white_mi_io_array = [c_w_mi_io_all, a_w_man_all, b_w_mi_io_all, d_w_mi_io_all]
const white_mi_lr_array = [c_w_mi_lr_all, a_w_ibi_all, b_w_mi_lr_all, d_w_mi_lr_all]
const grey_mi_io_array = [c_g_mi_io_all, a_g_man_all, b_g_mi_io_all, d_g_mi_io_all]
const grey_mi_lr_array = [c_g_mi_lr_all, a_g_ibi_all, b_g_mi_lr_all, d_g_mi_lr_all]

const black_pp_io_array = [c_b_pp_io_all, a_b_pal_all, b_b_pp_io_all, d_b_pp_io_all]
const black_pp_lr_array = [c_b_pp_lr_all, a_b_hea_all, b_b_pp_lr_all, d_b_pp_lr_all]
const white_pp_io_array = [c_w_pp_io_all, a_w_pal_all, b_w_pp_io_all, d_w_pp_io_all]
const white_pp_lr_array = [c_w_pp_lr_all, a_w_hea_all, b_w_pp_lr_all, d_w_pp_lr_all]
const grey_pp_io_array = [c_g_pp_io_all, a_g_pal_all, b_g_pp_io_all, d_g_pp_io_all]
const grey_pp_lr_array = [c_g_pp_lr_all, a_g_hea_all, b_g_pp_lr_all, d_g_pp_lr_all]

const black_ph_io_array = [c_b_ph_io_all, a_b_pin_all, b_b_ph_io_all, d_b_ph_io_all]
const black_ph_lr_array = [c_b_ph_lr_all, a_b_car_all, b_b_ph_lr_all, d_b_ph_lr_all]
const white_ph_io_array = [c_w_ph_io_all, a_w_pin_all, b_w_ph_io_all, d_w_ph_io_all]
const white_ph_lr_array = [c_w_ph_lr_all, a_w_car_all, b_w_ph_lr_all, d_w_ph_lr_all]
const grey_ph_io_array = [c_g_ph_io_all, a_g_pin_all, b_g_ph_io_all, d_g_ph_io_all]
const grey_ph_lr_array = [c_g_ph_lr_all, a_g_car_all, b_g_ph_lr_all, d_g_ph_lr_all]

const black_tp_io_array = [c_b_tp_io_all, a_b_tar_all, b_b_tp_io_all, d_b_tp_io_all]
const black_tp_lr_array = [c_b_tp_lr_all, a_b_pop_all, b_b_tp_lr_all, d_b_tp_lr_all]
const white_tp_io_array = [c_w_tp_io_all, a_w_tar_all, b_w_tp_io_all, d_w_tp_io_all]
const white_tp_lr_array = [c_w_tp_lr_all, a_w_pop_all, b_w_tp_lr_all, d_w_tp_lr_all]
const grey_tp_io_array = [c_g_tp_io_all, a_g_tar_all, b_g_tp_io_all, d_g_tp_io_all]
const grey_tp_lr_array = [c_g_tp_lr_all, a_g_pop_all, b_g_tp_lr_all, d_g_tp_lr_all]

const ba_lr_array = [black_ba_lr_array, white_ba_lr_array, grey_ba_lr_array]
const ba_io_array = [black_ba_io_array, white_ba_io_array, grey_ba_io_array]

const mi_lr_array = [black_mi_lr_array, white_mi_lr_array, grey_mi_lr_array]
const mi_io_array = [black_mi_io_array, white_mi_io_array, grey_mi_io_array]

const pp_lr_array = [black_pp_lr_array, white_pp_lr_array, grey_pp_lr_array]
const pp_io_array = [black_pp_io_array, white_pp_io_array, grey_pp_io_array]

const ph_lr_array = [black_ph_lr_array, white_ph_lr_array, grey_ph_lr_array]
const ph_io_array = [black_ph_io_array, white_ph_io_array, grey_ph_io_array]

const tp_lr_array = [black_tp_lr_array, white_tp_lr_array, grey_tp_lr_array]
const tp_io_array = [black_tp_io_array, white_tp_io_array, grey_tp_io_array]

const lr_arrays = [ba_lr_array, mi_lr_array, pp_lr_array, ph_lr_array, tp_lr_array]
const io_arrays = [ba_io_array, mi_io_array, pp_io_array, ph_io_array, tp_io_array]

let secondComplect = ''

const Step3Swiper = () => {

    let selectedArray = []
    const [array, setArray] = useState(selectedArray)

    for (let i = 0; i < 4; i++) {
        if (selector === 'black') {
            selectedArray[i] = ba_lr_array[0][i]
        } else if (selector === 'white') {
            selectedArray[i] = ba_lr_array[1][i]
        } else if (selector === 'grey') {
            selectedArray[i] = ba_lr_array[2][i]
        } else {
            console.log('sss')
        }
    }

    const handleChangeHood = () => {
        let colors = document.querySelectorAll('.slide')
        let correctColors = []
        for (let i = 8; i < colors.length; i++) {
            correctColors[i - 8] = colors[i]
        }
        for (let i = 0; i < correctColors.length; i++) {
            if (correctColors[i].classList.contains('selected')) {
                if (selector === 'black') {
                    setArray(lr_arrays[i][0])
                } else if (selector === 'white') {
                    setArray(lr_arrays[i][1])
                } else if (selector === 'grey') {
                    setArray(lr_arrays[i][2])
                } else {
                    console.log('sss')
                }
                return
            } else {
                console.log(0)
            }
        }
    }

    const change = () => {
        for (let i = 0; i < array.length; i++) {
            if (array[i] === ba_lr_array[0][i]) {
                setArray(ba_io_array[0])
            } else if (array[i] === ba_io_array[0][i]) {
                setArray(ba_lr_array[0])
            } else if (array[i] === ba_lr_array[1][i]) {
                setArray(ba_io_array[1])
            } else if (array[i] === ba_io_array[1][i]) {
                setArray(ba_lr_array[1])
            } else if (array[i] === ba_lr_array[2][i]) {
                setArray(ba_io_array[2])
            } else if (array[i] === ba_io_array[2][i]) {
                setArray(ba_lr_array[2])
            } else if (array[i] === mi_lr_array[0][i]) {
                setArray(mi_io_array[0])
            } else if (array[i] === mi_io_array[0][i]) {
                setArray(mi_lr_array[0])
            } else if (array[i] === mi_lr_array[1][i]) {
                setArray(mi_io_array[1])
            } else if (array[i] === mi_io_array[1][i]) {
                setArray(mi_lr_array[1])
            } else if (array[i] === mi_lr_array[2][i]) {
                setArray(mi_io_array[2])
            } else if (array[i] === mi_io_array[2][i]) {
                setArray(mi_lr_array[2])
            } else if (array[i] === pp_lr_array[0][i]) {
                setArray(pp_io_array[0])
            } else if (array[i] === pp_io_array[0][i]) {
                setArray(pp_lr_array[0])
            } else if (array[i] === pp_lr_array[1][i]) {
                setArray(pp_io_array[1])
            } else if (array[i] === pp_io_array[1][i]) {
                setArray(pp_lr_array[1])
            } else if (array[i] === pp_lr_array[2][i]) {
                setArray(pp_io_array[2])
            } else if (array[i] === pp_io_array[2][i]) {
                setArray(pp_lr_array[2])
            } else if (array[i] === ph_lr_array[0][i]) {
                setArray(ph_io_array[0])
            } else if (array[i] === ph_io_array[0][i]) {
                setArray(ph_lr_array[0])
            } else if (array[i] === ph_lr_array[1][i]) {
                setArray(ph_io_array[1])
            } else if (array[i] === ph_io_array[1][i]) {
                setArray(ph_lr_array[1])
            } else if (array[i] === ph_lr_array[2][i]) {
                setArray(ph_io_array[2])
            } else if (array[i] === ph_io_array[2][i]) {
                setArray(ph_lr_array[2])
            } else if (array[i] === tp_lr_array[0][i]) {
                setArray(tp_io_array[0])
            } else if (array[i] === tp_io_array[0][i]) {
                setArray(tp_lr_array[0])
            } else if (array[i] === tp_lr_array[1][i]) {
                setArray(tp_io_array[1])
            } else if (array[i] === tp_io_array[1][i]) {
                setArray(tp_lr_array[1])
            } else if (array[i] === tp_lr_array[2][i]) {
                setArray(tp_io_array[2])
            } else if (array[i] === tp_io_array[2][i]) {
                setArray(tp_lr_array[2])
            } else {
                console.log('sss')
            }
        }
        timeHandle()
    }

    function handleChangeColor() {
        let colors = []
        let slides = document.querySelectorAll('.slide')
        for (let i = 8; i < slides.length; i++) {
            colors[i - 8] = slides[i]
        }
    }

    const timeoutHandler = () => {
        setTimeout(handleChangeHood, 100)
    }

    const handleSelectFirstComplect = () => {
        let slides = document.querySelectorAll('.slide')
        let correctSlides = []
        for (let i = 4; i < 8; i++) {
            correctSlides[i - 4] = slides[i]
            if (correctSlides[i - 4].classList.contains('selected')) {
                secondComplect = array[i - 4]
            } else {
                console.log(0)
            }
        }
        console.log(secondComplect)
    }

    const timeHandle = () => {
        setTimeout(handleSelectFirstComplect,100)
    }

    setTimeout(handleChangeColor, 2000)
    setTimeout(handleChangeHood, 2000)
    setTimeout(handleSelectFirstComplect, 2000)


    let colorChanger = document.querySelector('.color-changer')
    colorChanger.addEventListener('click', timeoutHandler)

    return (
        <div style={{display: 'flex', flexDirection: 'column', width: '100vw'}}>
            <div className='backgrounds backgrounds-apricot' style={{height: 'calc(100vh)', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'absolute', top: 0, left: 0, width: '100%'}}></div>
            <SlidesArray changeArray={change} />
            <SlidesCards onChange={timeHandle} array={array} />
        </div>
    );
};

export {Step3Swiper, secondComplect};