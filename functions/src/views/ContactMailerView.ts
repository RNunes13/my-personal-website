
export const ContactMailerView = (name: string, email: string, message: string): string => {
  const image = 'data:image/png;base64,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';

  return `
    <!DOCTYPE html
      PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

    <html xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:v="urn:schemas-microsoft-com:vml">

    <head>
        <!--[if gte mso 9]><xml><o:OfficeDocumentSettings><o:AllowPNG/><o:PixelsPerInch>96</o:PixelsPerInch></o:OfficeDocumentSettings></xml><![endif]-->
        <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
        <meta content="width=device-width" name="viewport" />
        <!--[if !mso]><!-->
        <meta content="IE=edge" http-equiv="X-UA-Compatible" />
        <!--<![endif]-->
        <title></title>
        <!--[if !mso]><!-->
        <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" type="text/css" />
        <!--<![endif]-->
        <style type="text/css">
            body {
                margin: 0;
                padding: 0;
            }
            
            table,
            td,
            tr {
                vertical-align: top;
                border-collapse: collapse;
            }
            
            * {
                line-height: inherit;
            }
            
            a[x-apple-data-detectors=true] {
                color: inherit !important;
                text-decoration: none !important;
            }
        </style>
        <style id="media-query" type="text/css">
            @media (max-width: 520px) {
                .block-grid,
                .col {
                    min-width: 320px !important;
                    max-width: 100% !important;
                    display: block !important;
                }
                .block-grid {
                    width: 100% !important;
                }
                .col {
                    width: 100% !important;
                }
                .col>div {
                    margin: 0 auto;
                }
                img.fullwidth,
                img.fullwidthOnMobile {
                    max-width: 100% !important;
                }
                .no-stack .col {
                    min-width: 0 !important;
                    display: table-cell !important;
                }
                .no-stack.two-up .col {
                    width: 50% !important;
                }
                .no-stack .col.num4 {
                    width: 33% !important;
                }
                .no-stack .col.num8 {
                    width: 66% !important;
                }
                .no-stack .col.num4 {
                    width: 33% !important;
                }
                .no-stack .col.num3 {
                    width: 25% !important;
                }
                .no-stack .col.num6 {
                    width: 50% !important;
                }
                .no-stack .col.num9 {
                    width: 75% !important;
                }
                .video-block {
                    max-width: none !important;
                }
                .mobile_hide {
                    min-height: 0px;
                    max-height: 0px;
                    max-width: 0px;
                    display: none;
                    overflow: hidden;
                    font-size: 0px;
                }
                .desktop_hide {
                    display: block !important;
                    max-height: none !important;
                }
            }
        </style>
    </head>

    <body class="clean-body" style="margin: 0; padding: 0; -webkit-text-size-adjust: 100%; background-color: #FFFFFF;">
        <!--[if IE]><div class="ie-browser"><![endif]-->
        <table bgcolor="#FFFFFF" cellpadding="0" cellspacing="0" class="nl-container" role="presentation" style="table-layout: fixed; vertical-align: top; min-width: 320px; Margin: 0 auto; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #FFFFFF; width: 100%;"
            valign="top" width="100%">
            <tbody>
                <tr style="vertical-align: top;" valign="top">
                    <td style="word-break: break-word; vertical-align: top;" valign="top">
                        <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color:#FFFFFF"><![endif]-->
                        <div style="background-color:transparent;">
                            <div class="block-grid" style="Margin: 0 auto; min-width: 320px; max-width: 500px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; background-color: transparent;">
                                <div style="border-collapse: collapse;display: table;width: 100%;background-color:transparent;">
                                    <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:transparent;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:500px"><tr class="layout-full-width" style="background-color:transparent"><![endif]-->
                                    <!--[if (mso)|(IE)]><td align="center" width="500" style="background-color:transparent;width:500px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:5px; padding-bottom:5px;"><![endif]-->
                                    <div class="col num12" style="min-width: 320px; max-width: 500px; display: table-cell; vertical-align: top; width: 500px;">
                                        <div style="width:100% !important;">
                                            <!--[if (!mso)&(!IE)]><!-->
                                            <div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:5px; padding-bottom:5px; padding-right: 0px; padding-left: 0px;">
                                                <!--<![endif]-->
                                                <div align="center" class="img-container center fixedwidth" style="padding-right: 0px;padding-left: 0px;">
                                                    <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr style="line-height:0px"><td style="padding-right: 0px;padding-left: 0px;" align="center"><![endif]--><img align="center" alt="Alternate text" border="0" class="center fixedwidth" src="${image}" style="text-decoration: none; -ms-interpolation-mode: bicubic; height: auto; border: 0; width: 100%; max-width: 100px; display: block;"
                                                        title="Alternate text" width="100" />
                                                    <!--[if mso]></td></tr></table><![endif]-->
                                                </div>
                                                <!--[if (!mso)&(!IE)]><!-->
                                            </div>
                                            <!--<![endif]-->
                                        </div>
                                    </div>
                                    <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                                    <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
                                </div>
                            </div>
                        </div>
                        <div style="background-color:transparent;">
                            <div class="block-grid" style="Margin: 0 auto; min-width: 320px; max-width: 500px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; background-color: transparent;">
                                <div style="border-collapse: collapse;display: table;width: 100%;background-color:transparent;">
                                    <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:transparent;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:500px"><tr class="layout-full-width" style="background-color:transparent"><![endif]-->
                                    <!--[if (mso)|(IE)]><td align="center" width="500" style="background-color:transparent;width:500px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:5px; padding-bottom:5px;"><![endif]-->
                                    <div class="col num12" style="min-width: 320px; max-width: 500px; display: table-cell; vertical-align: top; width: 500px;">
                                        <div style="width:100% !important;">
                                            <!--[if (!mso)&(!IE)]><!-->
                                            <div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:5px; padding-bottom:5px; padding-right: 0px; padding-left: 0px;">
                                                <!--<![endif]-->
                                                <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 10px; padding-bottom: 10px; font-family: Tahoma, Verdana, sans-serif"><![endif]-->
                                                <div style="color:#555555;font-family:'Roboto', Tahoma, Verdana, Segoe, sans-serif;line-height:1.2;padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px;">
                                                    <div style="line-height: 1.2; font-size: 12px; font-family: 'Roboto', Tahoma, Verdana, Segoe, sans-serif; color: #555555; mso-line-height-alt: 14px;">
                                                        <p style="font-size: 16px; line-height: 1.2; text-align: center; font-family: Roboto, Tahoma, Verdana, Segoe, sans-serif; word-break: break-word; mso-line-height-alt: 19px; margin: 0;">
                                                            <span style="font-size: 16px;"><strong>Você tem uma nova mensagem!</strong></span></p>
                                                    </div>
                                                </div>
                                                <!--[if mso]></td></tr></table><![endif]-->
                                                <!--[if (!mso)&(!IE)]><!-->
                                            </div>
                                            <!--<![endif]-->
                                        </div>
                                    </div>
                                    <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                                    <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
                                </div>
                            </div>
                        </div>
                        <div style="background-color:transparent;">
                            <div class="block-grid" style="Margin: 0 auto; min-width: 320px; max-width: 500px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; background-color: transparent;">
                                <div style="border-collapse: collapse;display: table;width: 100%;background-color:transparent;">
                                    <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:transparent;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:500px"><tr class="layout-full-width" style="background-color:transparent"><![endif]-->
                                    <!--[if (mso)|(IE)]><td align="center" width="500" style="background-color:transparent;width:500px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:5px; padding-bottom:5px;"><![endif]-->
                                    <div class="col num12" style="min-width: 320px; max-width: 500px; display: table-cell; vertical-align: top; width: 500px;">
                                        <div style="width:100% !important;">
                                            <!--[if (!mso)&(!IE)]><!-->
                                            <div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:5px; padding-bottom:5px; padding-right: 0px; padding-left: 0px;">
                                                <!--<![endif]-->
                                                <table border="0" cellpadding="0" cellspacing="0" class="divider" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;"
                                                    valign="top" width="100%">
                                                    <tbody>
                                                        <tr style="vertical-align: top;" valign="top">
                                                            <td class="divider_inner" style="word-break: break-word; vertical-align: top; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 10px; padding-right: 10px; padding-bottom: 10px; padding-left: 10px;" valign="top">
                                                                <table align="center" border="0" cellpadding="0" cellspacing="0" class="divider_content" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-top: 1px solid #BBBBBB; width: 100%;"
                                                                    valign="top" width="100%">
                                                                    <tbody>
                                                                        <tr style="vertical-align: top;" valign="top">
                                                                            <td style="word-break: break-word; vertical-align: top; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" valign="top"><span></span></td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                                <!--[if (!mso)&(!IE)]><!-->
                                            </div>
                                            <!--<![endif]-->
                                        </div>
                                    </div>
                                    <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                                    <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
                                </div>
                            </div>
                        </div>
                        <div style="background-color:transparent;">
                            <div class="block-grid" style="Margin: 0 auto; min-width: 320px; max-width: 500px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; background-color: transparent;">
                                <div style="border-collapse: collapse;display: table;width: 100%;background-color:transparent;">
                                    <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:transparent;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:500px"><tr class="layout-full-width" style="background-color:transparent"><![endif]-->
                                    <!--[if (mso)|(IE)]><td align="center" width="500" style="background-color:transparent;width:500px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:5px; padding-bottom:5px;"><![endif]-->
                                    <div class="col num12" style="min-width: 320px; max-width: 500px; display: table-cell; vertical-align: top; width: 500px;">
                                        <div style="width:100% !important;">
                                            <!--[if (!mso)&(!IE)]><!-->
                                            <div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:5px; padding-bottom:5px; padding-right: 0px; padding-left: 0px;">
                                                <!--<![endif]-->
                                                <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 10px; padding-bottom: 10px; font-family: Tahoma, Verdana, sans-serif"><![endif]-->
                                                <div style="color:#555555;font-family:'Roboto', Tahoma, Verdana, Segoe, sans-serif;line-height:1.2;padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px;">
                                                    <div style="line-height: 1.2; font-size: 12px; color: #555555; font-family: 'Roboto', Tahoma, Verdana, Segoe, sans-serif; mso-line-height-alt: 14px;">
                                                        <p style="white-space: pre-line; text-align: justify; line-height: 1.2; word-break: break-word; font-size: 15px; mso-line-height-alt: 18px; margin: 0;">
                                                            <span style="font-size: 15px;"><strong>Nome:</strong> ${name}</span></p>
                                                        <p style="text-align: justify; line-height: 1.2; word-break: break-word; mso-line-height-alt: 14px; margin: 0;">
                                                            </p>
                                                        <p style="white-space: pre-line; text-align: justify; line-height: 1.2; word-break: break-word; font-size: 15px; mso-line-height-alt: 18px; margin: 0;">
                                                            <span style="font-size: 15px;"><strong>Email:</strong> ${email}</span></p>
                                                        <p style="text-align: justify; line-height: 1.2; word-break: break-word; mso-line-height-alt: 14px; margin: 0;">
                                                            </p>
                                                        <p style="white-space: pre-line; text-align: justify; line-height: 1.2; word-break: break-word; font-size: 15px; mso-line-height-alt: 18px; margin: 0;">
                                                            <span style="font-size: 15px;"><strong>Mensagem:</strong><br/>${message}</span></p>
                                                    </div>
                                                </div>
                                                <!--[if mso]></td></tr></table><![endif]-->
                                                <!--[if (!mso)&(!IE)]><!-->
                                            </div>
                                            <!--<![endif]-->
                                        </div>
                                    </div>
                                    <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                                    <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
                                </div>
                            </div>
                        </div>
                        <div style="background-color:transparent;">
                            <div class="block-grid" style="Margin: 0 auto; min-width: 320px; max-width: 500px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; background-color: transparent;">
                                <div style="border-collapse: collapse;display: table;width: 100%;background-color:transparent;">
                                    <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:transparent;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:500px"><tr class="layout-full-width" style="background-color:transparent"><![endif]-->
                                    <!--[if (mso)|(IE)]><td align="center" width="500" style="background-color:transparent;width:500px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:5px; padding-bottom:5px;"><![endif]-->
                                    <div class="col num12" style="min-width: 320px; max-width: 500px; display: table-cell; vertical-align: top; width: 500px;">
                                        <div style="width:100% !important;">
                                            <!--[if (!mso)&(!IE)]><!-->
                                            <div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:5px; padding-bottom:5px; padding-right: 0px; padding-left: 0px;">
                                                <!--<![endif]-->
                                                <table border="0" cellpadding="0" cellspacing="0" class="divider" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;"
                                                    valign="top" width="100%">
                                                    <tbody>
                                                        <tr style="vertical-align: top;" valign="top">
                                                            <td class="divider_inner" style="word-break: break-word; vertical-align: top; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 10px; padding-right: 10px; padding-bottom: 10px; padding-left: 10px;" valign="top">
                                                                <table align="center" border="0" cellpadding="0" cellspacing="0" class="divider_content" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-top: 1px solid #BBBBBB; width: 100%;"
                                                                    valign="top" width="100%">
                                                                    <tbody>
                                                                        <tr style="vertical-align: top;" valign="top">
                                                                            <td style="word-break: break-word; vertical-align: top; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" valign="top"><span></span></td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                                <!--[if (!mso)&(!IE)]><!-->
                                            </div>
                                            <!--<![endif]-->
                                        </div>
                                    </div>
                                    <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                                    <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
                                </div>
                            </div>
                        </div>
                        <div style="background-color:transparent;">
                            <div class="block-grid" style="Margin: 0 auto; min-width: 320px; max-width: 500px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; background-color: transparent;">
                                <div style="border-collapse: collapse;display: table;width: 100%;background-color:transparent;">
                                    <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:transparent;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:500px"><tr class="layout-full-width" style="background-color:transparent"><![endif]-->
                                    <!--[if (mso)|(IE)]><td align="center" width="500" style="background-color:transparent;width:500px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:5px; padding-bottom:5px;"><![endif]-->
                                    <div class="col num12" style="min-width: 320px; max-width: 500px; display: table-cell; vertical-align: top; width: 500px;">
                                        <div style="width:100% !important;">
                                            <!--[if (!mso)&(!IE)]><!-->
                                            <div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:5px; padding-bottom:5px; padding-right: 0px; padding-left: 0px;">
                                                <!--<![endif]-->
                                                <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 10px; padding-bottom: 10px; font-family: Tahoma, Verdana, sans-serif"><![endif]-->
                                                <div style="color:#555555;font-family:'Roboto', Tahoma, Verdana, Segoe, sans-serif;line-height:1.2;padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px;">
                                                    <div style="line-height: 1.2; font-size: 12px; font-family: 'Roboto', Tahoma, Verdana, Segoe, sans-serif; color: #555555; mso-line-height-alt: 14px;">
                                                        <p style="font-size: 14px; line-height: 1.2; text-align: center; font-family: Roboto, Tahoma, Verdana, Segoe, sans-serif; word-break: break-word; mso-line-height-alt: 17px; margin: 0;">
                                                            <span style="color: #999999;">Rodrigo Nunes | Web Developer</span></p>
                                                    </div>
                                                </div>
                                                <!--[if mso]></td></tr></table><![endif]-->
                                                <!--[if (!mso)&(!IE)]><!-->
                                            </div>
                                            <!--<![endif]-->
                                        </div>
                                    </div>
                                    <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                                    <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
                                </div>
                            </div>
                        </div>
                        <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                    </td>
                </tr>
            </tbody>
        </table>
        <!--[if (IE)]></div><![endif]-->
    </body>
    </html>
  `;
}
