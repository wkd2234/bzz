<?php

/**
 * 缩小剪切图片
 *
 * 缩小高度为固定值,宽度按高度缩小比例进行变化;
 */
class ImgOperation
{
    private $img;
    private $type;
    private $img_src;
    private $outer_width;
    private $outer_height;
    private $outfile;

    function __construct($url,$width,$height,$outfile){
        $this->img_src = $url;
        $this->outer_width = $width;
        $this->outer_height = $height;

        $this->type = strtolower(strrchr($this->img_src,'.'));
        $filename = strtolower(strrchr($this->img_src,'\\'));

        $this->outfile = $outfile.$filename;

        $this->img = $this->init_img();
        if(empty($this->img))
            return;

        $this->resize_img_basis_height();
    }

    private function init_img(){
        $img = '';

        switch($this->type){
            case '.jpg':
                $img = imagecreatefromjpeg($this->img_src);
                break;
            case '.jpeg':
                $img = imagecreatefromjpeg($this->img_src);
                break;
            case '.png':
                $img = imagecreatefrompng($this->img_src);
                break;
            default:
                throw new Exception('不支持该格式的图片');
                break;
        }
        return $img;
    }

    private function resize_img_basis_height(){
        $img_width = imagesx($this->img);
        $img_height = imagesy($this->img);

        $quotient = $img_height/$this->outer_height;

        if($quotient <= 1){
            $img_height = $this->outer_height;
            $cut_width = $this->outer_width;
        }else{
            $cut_width = $this->outer_width * $quotient;
        }

        $img = imagecreatetruecolor($this->outer_width,$this->outer_height);
        $color=imagecolorallocate($img,255,255,255);

        imagecolortransparent($img,$color);
        imagefill($img,0,0,$color);

        echo $this->outfile;

        imagecopyresampled($img, $this->img, 0, 0, 0, 0, $this->outer_width,$this->outer_height, $cut_width , $img_height);
        if($this->type == '.jpg' || $this->type == '.jpeg')
            imagejpeg($img, $this->outfile);
        else if($this->type == '.png')
            imagepng($img,$this->outfile);

        imagedestroy($img);
    }

}

