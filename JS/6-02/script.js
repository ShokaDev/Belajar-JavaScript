<P><SCRIPT language="JavaScript">
    <!--
    function jumlah()
    {
    var bil1 = parseFloat(document.fform.bilangan1.value);
    if (isNaN (bil1))
    bil1=0.0;
    var bil2 = parseFloat(document.fform.bilangan2.value);
    if (isNaN (bil2))
    bil2=0.0;
    var hasil = bil1 + bil2;
    alert ("Hasil Penjumlahan = " + hasil);
    }
    //-->
    </SCRIPT></P>
    <FORM NAME = "fform">
    <H1><BR>Memasukkan Data Lewat Keyboard</H1>
    <PRE>
    Bilangan Pertama :<input type="text" size="11" name="bilangan1">
    Bilangan Kedua :<input type="text" size="11" name="bilangan2">
    </PRE>
    <INPUT TYPE="button" value="Jumlahkan" onclick="jumlah()">
    <INPUT TYPE="reset" value="Ulang">
    </FORM>