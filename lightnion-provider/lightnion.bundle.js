!function(r){"use strict";function t(r,t,n,e){r[t]=n>>24&255,r[t+1]=n>>16&255,r[t+2]=n>>8&255,r[t+3]=255&n,r[t+4]=e>>24&255,r[t+5]=e>>16&255,r[t+6]=e>>8&255,r[t+7]=255&e}function n(r,t,n,e,o){var i,h=0;for(i=0;i<o;i++)h|=r[t+i]^n[e+i];return(1&h-1>>>8)-1}function e(r,t,e,o){return n(r,t,e,o,16)}function o(r,t,e,o){return n(r,t,e,o,32)}function i(r,t,n,e){for(var o,i=255&e[0]|(255&e[1])<<8|(255&e[2])<<16|(255&e[3])<<24,h=255&n[0]|(255&n[1])<<8|(255&n[2])<<16|(255&n[3])<<24,a=255&n[4]|(255&n[5])<<8|(255&n[6])<<16|(255&n[7])<<24,f=255&n[8]|(255&n[9])<<8|(255&n[10])<<16|(255&n[11])<<24,s=255&n[12]|(255&n[13])<<8|(255&n[14])<<16|(255&n[15])<<24,u=255&e[4]|(255&e[5])<<8|(255&e[6])<<16|(255&e[7])<<24,c=255&t[0]|(255&t[1])<<8|(255&t[2])<<16|(255&t[3])<<24,y=255&t[4]|(255&t[5])<<8|(255&t[6])<<16|(255&t[7])<<24,l=255&t[8]|(255&t[9])<<8|(255&t[10])<<16|(255&t[11])<<24,w=255&t[12]|(255&t[13])<<8|(255&t[14])<<16|(255&t[15])<<24,v=255&e[8]|(255&e[9])<<8|(255&e[10])<<16|(255&e[11])<<24,p=255&n[16]|(255&n[17])<<8|(255&n[18])<<16|(255&n[19])<<24,b=255&n[20]|(255&n[21])<<8|(255&n[22])<<16|(255&n[23])<<24,g=255&n[24]|(255&n[25])<<8|(255&n[26])<<16|(255&n[27])<<24,_=255&n[28]|(255&n[29])<<8|(255&n[30])<<16|(255&n[31])<<24,A=255&e[12]|(255&e[13])<<8|(255&e[14])<<16|(255&e[15])<<24,U=i,d=h,E=a,x=f,M=s,m=u,B=c,S=y,K=l,Y=w,k=v,T=p,L=b,z=g,R=_,P=A,N=0;N<20;N+=2)o=U+L|0,M^=o<<7|o>>>25,o=M+U|0,K^=o<<9|o>>>23,o=K+M|0,L^=o<<13|o>>>19,o=L+K|0,U^=o<<18|o>>>14,o=m+d|0,Y^=o<<7|o>>>25,o=Y+m|0,z^=o<<9|o>>>23,o=z+Y|0,d^=o<<13|o>>>19,o=d+z|0,m^=o<<18|o>>>14,o=k+B|0,R^=o<<7|o>>>25,o=R+k|0,E^=o<<9|o>>>23,o=E+R|0,B^=o<<13|o>>>19,o=B+E|0,k^=o<<18|o>>>14,o=P+T|0,x^=o<<7|o>>>25,o=x+P|0,S^=o<<9|o>>>23,o=S+x|0,T^=o<<13|o>>>19,o=T+S|0,P^=o<<18|o>>>14,o=U+x|0,d^=o<<7|o>>>25,o=d+U|0,E^=o<<9|o>>>23,o=E+d|0,x^=o<<13|o>>>19,o=x+E|0,U^=o<<18|o>>>14,o=m+M|0,B^=o<<7|o>>>25,o=B+m|0,S^=o<<9|o>>>23,o=S+B|0,M^=o<<13|o>>>19,o=M+S|0,m^=o<<18|o>>>14,o=k+Y|0,T^=o<<7|o>>>25,o=T+k|0,K^=o<<9|o>>>23,o=K+T|0,Y^=o<<13|o>>>19,o=Y+K|0,k^=o<<18|o>>>14,o=P+R|0,L^=o<<7|o>>>25,o=L+P|0,z^=o<<9|o>>>23,o=z+L|0,R^=o<<13|o>>>19,o=R+z|0,P^=o<<18|o>>>14;U=U+i|0,d=d+h|0,E=E+a|0,x=x+f|0,M=M+s|0,m=m+u|0,B=B+c|0,S=S+y|0,K=K+l|0,Y=Y+w|0,k=k+v|0,T=T+p|0,L=L+b|0,z=z+g|0,R=R+_|0,P=P+A|0,r[0]=U>>>0&255,r[1]=U>>>8&255,r[2]=U>>>16&255,r[3]=U>>>24&255,r[4]=d>>>0&255,r[5]=d>>>8&255,r[6]=d>>>16&255,r[7]=d>>>24&255,r[8]=E>>>0&255,r[9]=E>>>8&255,r[10]=E>>>16&255,r[11]=E>>>24&255,r[12]=x>>>0&255,r[13]=x>>>8&255,r[14]=x>>>16&255,r[15]=x>>>24&255,r[16]=M>>>0&255,r[17]=M>>>8&255,r[18]=M>>>16&255,r[19]=M>>>24&255,r[20]=m>>>0&255,r[21]=m>>>8&255,r[22]=m>>>16&255,r[23]=m>>>24&255,r[24]=B>>>0&255,r[25]=B>>>8&255,r[26]=B>>>16&255,r[27]=B>>>24&255,r[28]=S>>>0&255,r[29]=S>>>8&255,r[30]=S>>>16&255,r[31]=S>>>24&255,r[32]=K>>>0&255,r[33]=K>>>8&255,r[34]=K>>>16&255,r[35]=K>>>24&255,r[36]=Y>>>0&255,r[37]=Y>>>8&255,r[38]=Y>>>16&255,r[39]=Y>>>24&255,r[40]=k>>>0&255,r[41]=k>>>8&255,r[42]=k>>>16&255,r[43]=k>>>24&255,r[44]=T>>>0&255,r[45]=T>>>8&255,r[46]=T>>>16&255,r[47]=T>>>24&255,r[48]=L>>>0&255,r[49]=L>>>8&255,r[50]=L>>>16&255,r[51]=L>>>24&255,r[52]=z>>>0&255,r[53]=z>>>8&255,r[54]=z>>>16&255,r[55]=z>>>24&255,r[56]=R>>>0&255,r[57]=R>>>8&255,r[58]=R>>>16&255,r[59]=R>>>24&255,r[60]=P>>>0&255,r[61]=P>>>8&255,r[62]=P>>>16&255,r[63]=P>>>24&255}function h(r,t,n,e){for(var o,i=255&e[0]|(255&e[1])<<8|(255&e[2])<<16|(255&e[3])<<24,h=255&n[0]|(255&n[1])<<8|(255&n[2])<<16|(255&n[3])<<24,a=255&n[4]|(255&n[5])<<8|(255&n[6])<<16|(255&n[7])<<24,f=255&n[8]|(255&n[9])<<8|(255&n[10])<<16|(255&n[11])<<24,s=255&n[12]|(255&n[13])<<8|(255&n[14])<<16|(255&n[15])<<24,u=255&e[4]|(255&e[5])<<8|(255&e[6])<<16|(255&e[7])<<24,c=255&t[0]|(255&t[1])<<8|(255&t[2])<<16|(255&t[3])<<24,y=255&t[4]|(255&t[5])<<8|(255&t[6])<<16|(255&t[7])<<24,l=255&t[8]|(255&t[9])<<8|(255&t[10])<<16|(255&t[11])<<24,w=255&t[12]|(255&t[13])<<8|(255&t[14])<<16|(255&t[15])<<24,v=255&e[8]|(255&e[9])<<8|(255&e[10])<<16|(255&e[11])<<24,p=255&n[16]|(255&n[17])<<8|(255&n[18])<<16|(255&n[19])<<24,b=255&n[20]|(255&n[21])<<8|(255&n[22])<<16|(255&n[23])<<24,g=255&n[24]|(255&n[25])<<8|(255&n[26])<<16|(255&n[27])<<24,_=255&n[28]|(255&n[29])<<8|(255&n[30])<<16|(255&n[31])<<24,A=255&e[12]|(255&e[13])<<8|(255&e[14])<<16|(255&e[15])<<24,U=i,d=h,E=a,x=f,M=s,m=u,B=c,S=y,K=l,Y=w,k=v,T=p,L=b,z=g,R=_,P=A,N=0;N<20;N+=2)o=U+L|0,M^=o<<7|o>>>25,o=M+U|0,K^=o<<9|o>>>23,o=K+M|0,L^=o<<13|o>>>19,o=L+K|0,U^=o<<18|o>>>14,o=m+d|0,Y^=o<<7|o>>>25,o=Y+m|0,z^=o<<9|o>>>23,o=z+Y|0,d^=o<<13|o>>>19,o=d+z|0,m^=o<<18|o>>>14,o=k+B|0,R^=o<<7|o>>>25,o=R+k|0,E^=o<<9|o>>>23,o=E+R|0,B^=o<<13|o>>>19,o=B+E|0,k^=o<<18|o>>>14,o=P+T|0,x^=o<<7|o>>>25,o=x+P|0,S^=o<<9|o>>>23,o=S+x|0,T^=o<<13|o>>>19,o=T+S|0,P^=o<<18|o>>>14,o=U+x|0,d^=o<<7|o>>>25,o=d+U|0,E^=o<<9|o>>>23,o=E+d|0,x^=o<<13|o>>>19,o=x+E|0,U^=o<<18|o>>>14,o=m+M|0,B^=o<<7|o>>>25,o=B+m|0,S^=o<<9|o>>>23,o=S+B|0,M^=o<<13|o>>>19,o=M+S|0,m^=o<<18|o>>>14,o=k+Y|0,T^=o<<7|o>>>25,o=T+k|0,K^=o<<9|o>>>23,o=K+T|0,Y^=o<<13|o>>>19,o=Y+K|0,k^=o<<18|o>>>14,o=P+R|0,L^=o<<7|o>>>25,o=L+P|0,z^=o<<9|o>>>23,o=z+L|0,R^=o<<13|o>>>19,o=R+z|0,P^=o<<18|o>>>14;r[0]=U>>>0&255,r[1]=U>>>8&255,r[2]=U>>>16&255,r[3]=U>>>24&255,r[4]=m>>>0&255,r[5]=m>>>8&255,r[6]=m>>>16&255,r[7]=m>>>24&255,r[8]=k>>>0&255,r[9]=k>>>8&255,r[10]=k>>>16&255,r[11]=k>>>24&255,r[12]=P>>>0&255,r[13]=P>>>8&255,r[14]=P>>>16&255,r[15]=P>>>24&255,r[16]=B>>>0&255,r[17]=B>>>8&255,r[18]=B>>>16&255,r[19]=B>>>24&255,r[20]=S>>>0&255,r[21]=S>>>8&255,r[22]=S>>>16&255,r[23]=S>>>24&255,r[24]=K>>>0&255,r[25]=K>>>8&255,r[26]=K>>>16&255,r[27]=K>>>24&255,r[28]=Y>>>0&255,r[29]=Y>>>8&255,r[30]=Y>>>16&255,r[31]=Y>>>24&255}function a(r,t,n,e){i(r,t,n,e)}function f(r,t,n,e){h(r,t,n,e)}function s(r,t,n,e,o,i,h){var f,s,u=new Uint8Array(16),c=new Uint8Array(64);for(s=0;s<16;s++)u[s]=0;for(s=0;s<8;s++)u[s]=i[s];for(;o>=64;){for(a(c,u,h,cr),s=0;s<64;s++)r[t+s]=n[e+s]^c[s];for(f=1,s=8;s<16;s++)f=f+(255&u[s])|0,u[s]=255&f,f>>>=8;o-=64,t+=64,e+=64}if(o>0)for(a(c,u,h,cr),s=0;s<o;s++)r[t+s]=n[e+s]^c[s];return 0}function u(r,t,n,e,o){var i,h,f=new Uint8Array(16),s=new Uint8Array(64);for(h=0;h<16;h++)f[h]=0;for(h=0;h<8;h++)f[h]=e[h];for(;n>=64;){for(a(s,f,o,cr),h=0;h<64;h++)r[t+h]=s[h];for(i=1,h=8;h<16;h++)i=i+(255&f[h])|0,f[h]=255&i,i>>>=8;n-=64,t+=64}if(n>0)for(a(s,f,o,cr),h=0;h<n;h++)r[t+h]=s[h];return 0}function c(r,t,n,e,o){var i=new Uint8Array(32);f(i,e,o,cr);for(var h=new Uint8Array(8),a=0;a<8;a++)h[a]=e[a+16];return u(r,t,n,h,i)}function y(r,t,n,e,o,i,h){var a=new Uint8Array(32);f(a,i,h,cr);for(var u=new Uint8Array(8),c=0;c<8;c++)u[c]=i[c+16];return s(r,t,n,e,o,u,a)}function l(r,t,n,e,o,i){var h=new yr(i);return h.update(n,e,o),h.finish(r,t),0}function w(r,t,n,o,i,h){var a=new Uint8Array(16);return l(a,0,n,o,i,h),e(r,t,a,0)}function v(r,t,n,e,o){var i;if(n<32)return-1;for(y(r,0,t,0,n,e,o),l(r,16,r,32,n-32,r),i=0;i<16;i++)r[i]=0;return 0}function p(r,t,n,e,o){var i,h=new Uint8Array(32);if(n<32)return-1;if(c(h,0,32,e,o),0!==w(t,16,t,32,n-32,h))return-1;for(y(r,0,t,0,n,e,o),i=0;i<32;i++)r[i]=0;return 0}function b(r,t){var n;for(n=0;n<16;n++)r[n]=0|t[n]}function g(r){var t,n,e=1;for(t=0;t<16;t++)n=r[t]+e+65535,e=Math.floor(n/65536),r[t]=n-65536*e;r[0]+=e-1+37*(e-1)}function _(r,t,n){for(var e,o=~(n-1),i=0;i<16;i++)e=o&(r[i]^t[i]),r[i]^=e,t[i]^=e}function A(r,t){var n,e,o,i=$(),h=$();for(n=0;n<16;n++)h[n]=t[n];for(g(h),g(h),g(h),e=0;e<2;e++){for(i[0]=h[0]-65517,n=1;n<15;n++)i[n]=h[n]-65535-(i[n-1]>>16&1),i[n-1]&=65535;i[15]=h[15]-32767-(i[14]>>16&1),o=i[15]>>16&1,i[14]&=65535,_(h,i,1-o)}for(n=0;n<16;n++)r[2*n]=255&h[n],r[2*n+1]=h[n]>>8}function U(r,t){var n=new Uint8Array(32),e=new Uint8Array(32);return A(n,r),A(e,t),o(n,0,e,0)}function d(r){var t=new Uint8Array(32);return A(t,r),1&t[0]}function E(r,t){var n;for(n=0;n<16;n++)r[n]=t[2*n]+(t[2*n+1]<<8);r[15]&=32767}function x(r,t,n){for(var e=0;e<16;e++)r[e]=t[e]+n[e]}function M(r,t,n){for(var e=0;e<16;e++)r[e]=t[e]-n[e]}function m(r,t,n){var e,o,i=0,h=0,a=0,f=0,s=0,u=0,c=0,y=0,l=0,w=0,v=0,p=0,b=0,g=0,_=0,A=0,U=0,d=0,E=0,x=0,M=0,m=0,B=0,S=0,K=0,Y=0,k=0,T=0,L=0,z=0,R=0,P=n[0],N=n[1],O=n[2],C=n[3],F=n[4],I=n[5],G=n[6],Z=n[7],q=n[8],V=n[9],X=n[10],D=n[11],j=n[12],H=n[13],J=n[14],Q=n[15];e=t[0],i+=e*P,h+=e*N,a+=e*O,f+=e*C,s+=e*F,u+=e*I,c+=e*G,y+=e*Z,l+=e*q,w+=e*V,v+=e*X,p+=e*D,b+=e*j,g+=e*H,_+=e*J,A+=e*Q,e=t[1],h+=e*P,a+=e*N,f+=e*O,s+=e*C,u+=e*F,c+=e*I,y+=e*G,l+=e*Z,w+=e*q,v+=e*V,p+=e*X,b+=e*D,g+=e*j,_+=e*H,A+=e*J,U+=e*Q,e=t[2],a+=e*P,f+=e*N,s+=e*O,u+=e*C,c+=e*F,y+=e*I,l+=e*G,w+=e*Z,v+=e*q,p+=e*V,b+=e*X,g+=e*D,_+=e*j,A+=e*H,U+=e*J,d+=e*Q,e=t[3],f+=e*P,s+=e*N,u+=e*O,c+=e*C,y+=e*F,l+=e*I,w+=e*G,v+=e*Z,p+=e*q,b+=e*V,g+=e*X,_+=e*D,A+=e*j,U+=e*H,d+=e*J,E+=e*Q,e=t[4],s+=e*P,u+=e*N,c+=e*O,y+=e*C,l+=e*F,w+=e*I,v+=e*G,p+=e*Z,b+=e*q,g+=e*V,_+=e*X,A+=e*D,U+=e*j,d+=e*H,E+=e*J,x+=e*Q,e=t[5],u+=e*P,c+=e*N,y+=e*O,l+=e*C,w+=e*F,v+=e*I,p+=e*G,b+=e*Z,g+=e*q,_+=e*V,A+=e*X,U+=e*D,d+=e*j,E+=e*H,x+=e*J,M+=e*Q,e=t[6],c+=e*P,y+=e*N,l+=e*O,w+=e*C,v+=e*F,p+=e*I,b+=e*G,g+=e*Z,_+=e*q,A+=e*V,U+=e*X,d+=e*D,E+=e*j,x+=e*H,M+=e*J,m+=e*Q,e=t[7],y+=e*P,l+=e*N,w+=e*O,v+=e*C,p+=e*F,b+=e*I,g+=e*G,_+=e*Z,A+=e*q,U+=e*V,d+=e*X,E+=e*D,x+=e*j,M+=e*H,m+=e*J,B+=e*Q,e=t[8],l+=e*P,w+=e*N,v+=e*O,p+=e*C,b+=e*F,g+=e*I,_+=e*G,A+=e*Z,U+=e*q,d+=e*V,E+=e*X,x+=e*D,M+=e*j,m+=e*H,B+=e*J,S+=e*Q,e=t[9],w+=e*P,v+=e*N,p+=e*O,b+=e*C,g+=e*F,_+=e*I,A+=e*G,U+=e*Z,d+=e*q,E+=e*V,x+=e*X,M+=e*D,m+=e*j,B+=e*H,S+=e*J,K+=e*Q,e=t[10],v+=e*P,p+=e*N,b+=e*O,g+=e*C,_+=e*F,A+=e*I,U+=e*G,d+=e*Z,E+=e*q,x+=e*V,M+=e*X,m+=e*D,B+=e*j,S+=e*H,K+=e*J,Y+=e*Q,e=t[11],p+=e*P,b+=e*N,g+=e*O,_+=e*C,A+=e*F,U+=e*I,d+=e*G,E+=e*Z,x+=e*q,M+=e*V,m+=e*X,B+=e*D;S+=e*j;K+=e*H,Y+=e*J,k+=e*Q,e=t[12],b+=e*P,g+=e*N,_+=e*O,A+=e*C,U+=e*F,d+=e*I,E+=e*G,x+=e*Z,M+=e*q,m+=e*V,B+=e*X,S+=e*D,K+=e*j,Y+=e*H,k+=e*J,T+=e*Q,e=t[13],g+=e*P,_+=e*N,A+=e*O,U+=e*C,d+=e*F,E+=e*I,x+=e*G,M+=e*Z,m+=e*q,B+=e*V,S+=e*X,K+=e*D,Y+=e*j,k+=e*H,T+=e*J,L+=e*Q,e=t[14],_+=e*P,A+=e*N,U+=e*O,d+=e*C,E+=e*F,x+=e*I,M+=e*G,m+=e*Z,B+=e*q,S+=e*V,K+=e*X,Y+=e*D,k+=e*j,T+=e*H,L+=e*J,z+=e*Q,e=t[15],A+=e*P,U+=e*N,d+=e*O,E+=e*C,x+=e*F,M+=e*I,m+=e*G,B+=e*Z,S+=e*q,K+=e*V,Y+=e*X,k+=e*D,T+=e*j,L+=e*H,z+=e*J,R+=e*Q,i+=38*U,h+=38*d,a+=38*E,f+=38*x,s+=38*M,u+=38*m,c+=38*B,y+=38*S,l+=38*K,w+=38*Y,v+=38*k,p+=38*T,b+=38*L,g+=38*z,_+=38*R,o=1,e=i+o+65535,o=Math.floor(e/65536),i=e-65536*o,e=h+o+65535,o=Math.floor(e/65536),h=e-65536*o,e=a+o+65535,o=Math.floor(e/65536),a=e-65536*o,e=f+o+65535,o=Math.floor(e/65536),f=e-65536*o,e=s+o+65535,o=Math.floor(e/65536),s=e-65536*o,e=u+o+65535,o=Math.floor(e/65536),u=e-65536*o,e=c+o+65535,o=Math.floor(e/65536),c=e-65536*o,e=y+o+65535,o=Math.floor(e/65536),y=e-65536*o,e=l+o+65535,o=Math.floor(e/65536),l=e-65536*o,e=w+o+65535,o=Math.floor(e/65536),w=e-65536*o,e=v+o+65535,o=Math.floor(e/65536),v=e-65536*o,e=p+o+65535,o=Math.floor(e/65536),p=e-65536*o,e=b+o+65535,o=Math.floor(e/65536),b=e-65536*o,e=g+o+65535,o=Math.floor(e/65536),g=e-65536*o,e=_+o+65535,o=Math.floor(e/65536),_=e-65536*o,e=A+o+65535,o=Math.floor(e/65536),A=e-65536*o,i+=o-1+37*(o-1),o=1,e=i+o+65535,o=Math.floor(e/65536),i=e-65536*o,e=h+o+65535,o=Math.floor(e/65536),h=e-65536*o,e=a+o+65535,o=Math.floor(e/65536),a=e-65536*o,e=f+o+65535,o=Math.floor(e/65536),f=e-65536*o,e=s+o+65535,o=Math.floor(e/65536),s=e-65536*o,e=u+o+65535,o=Math.floor(e/65536),u=e-65536*o,e=c+o+65535,o=Math.floor(e/65536),c=e-65536*o,e=y+o+65535,o=Math.floor(e/65536),y=e-65536*o,e=l+o+65535,o=Math.floor(e/65536),l=e-65536*o,e=w+o+65535,o=Math.floor(e/65536),w=e-65536*o,e=v+o+65535,o=Math.floor(e/65536),v=e-65536*o,e=p+o+65535,o=Math.floor(e/65536),p=e-65536*o,e=b+o+65535,o=Math.floor(e/65536),b=e-65536*o,e=g+o+65535,o=Math.floor(e/65536),g=e-65536*o,e=_+o+65535,o=Math.floor(e/65536),_=e-65536*o,e=A+o+65535,o=Math.floor(e/65536),A=e-65536*o,i+=o-1+37*(o-1),r[0]=i,r[1]=h,r[2]=a,r[3]=f,r[4]=s,r[5]=u,r[6]=c,r[7]=y,r[8]=l,r[9]=w,r[10]=v,r[11]=p,r[12]=b,r[13]=g;r[14]=_;r[15]=A}function B(r,t){m(r,t,t)}function S(r,t){var n,e=$();for(n=0;n<16;n++)e[n]=t[n];for(n=253;n>=0;n--)B(e,e),2!==n&&4!==n&&m(e,e,t);for(n=0;n<16;n++)r[n]=e[n]}function K(r,t){var n,e=$();for(n=0;n<16;n++)e[n]=t[n];for(n=250;n>=0;n--)B(e,e),1!==n&&m(e,e,t);for(n=0;n<16;n++)r[n]=e[n]}function Y(r,t,n){var e,o,i=new Uint8Array(32),h=new Float64Array(80),a=$(),f=$(),s=$(),u=$(),c=$(),y=$();for(o=0;o<31;o++)i[o]=t[o];for(i[31]=127&t[31]|64,i[0]&=248,E(h,n),o=0;o<16;o++)f[o]=h[o],u[o]=a[o]=s[o]=0;for(a[0]=u[0]=1,o=254;o>=0;--o)e=i[o>>>3]>>>(7&o)&1,_(a,f,e),_(s,u,e),x(c,a,s),M(a,a,s),x(s,f,u),M(f,f,u),B(u,c),B(y,a),m(a,s,a),m(s,f,c),x(c,a,s),M(a,a,s),B(f,a),M(s,u,y),m(a,s,ir),x(a,a,u),m(s,s,a),m(a,u,y),m(u,f,h),B(f,c),_(a,f,e),_(s,u,e);for(o=0;o<16;o++)h[o+16]=a[o],h[o+32]=s[o],h[o+48]=f[o],h[o+64]=u[o];var l=h.subarray(32),w=h.subarray(16);return S(l,l),m(w,w,l),A(r,w),0}function k(r,t){return Y(r,t,nr)}function T(r,t){return rr(t,32),k(r,t)}function L(r,t,n){var e=new Uint8Array(32);return Y(e,n,t),f(r,tr,e,cr)}function z(r,t,n,e,o,i){var h=new Uint8Array(32);return L(h,o,i),lr(r,t,n,e,h)}function R(r,t,n,e,o,i){var h=new Uint8Array(32);return L(h,o,i),wr(r,t,n,e,h)}function P(r,t,n,e){for(var o,i,h,a,f,s,u,c,y,l,w,v,p,b,g,_,A,U,d,E,x,M,m,B,S,K,Y=new Int32Array(16),k=new Int32Array(16),T=r[0],L=r[1],z=r[2],R=r[3],P=r[4],N=r[5],O=r[6],C=r[7],F=t[0],I=t[1],G=t[2],Z=t[3],q=t[4],V=t[5],X=t[6],D=t[7],j=0;e>=128;){for(d=0;d<16;d++)E=8*d+j,Y[d]=n[E+0]<<24|n[E+1]<<16|n[E+2]<<8|n[E+3],k[d]=n[E+4]<<24|n[E+5]<<16|n[E+6]<<8|n[E+7];for(d=0;d<80;d++)if(o=T,i=L,h=z,a=R,f=P,s=N,u=O,c=C,y=F,l=I,w=G,v=Z,p=q,b=V,g=X,_=D,x=C,M=D,m=65535&M,B=M>>>16,S=65535&x,K=x>>>16,x=(P>>>14|q<<18)^(P>>>18|q<<14)^(q>>>9|P<<23),M=(q>>>14|P<<18)^(q>>>18|P<<14)^(P>>>9|q<<23),m+=65535&M,B+=M>>>16,S+=65535&x,K+=x>>>16,x=P&N^~P&O,M=q&V^~q&X,m+=65535&M,B+=M>>>16,S+=65535&x,K+=x>>>16,x=vr[2*d],M=vr[2*d+1],m+=65535&M,B+=M>>>16,S+=65535&x,K+=x>>>16,x=Y[d%16],M=k[d%16],m+=65535&M,B+=M>>>16,S+=65535&x,K+=x>>>16,B+=m>>>16,S+=B>>>16,K+=S>>>16,A=65535&S|K<<16,U=65535&m|B<<16,x=A,M=U,m=65535&M,B=M>>>16,S=65535&x,K=x>>>16,x=(T>>>28|F<<4)^(F>>>2|T<<30)^(F>>>7|T<<25),M=(F>>>28|T<<4)^(T>>>2|F<<30)^(T>>>7|F<<25),m+=65535&M,B+=M>>>16,S+=65535&x,K+=x>>>16,x=T&L^T&z^L&z,M=F&I^F&G^I&G,m+=65535&M,B+=M>>>16,S+=65535&x,K+=x>>>16,B+=m>>>16,S+=B>>>16,K+=S>>>16,c=65535&S|K<<16,_=65535&m|B<<16,x=a,M=v,m=65535&M,B=M>>>16,S=65535&x,K=x>>>16,x=A,M=U,m+=65535&M,B+=M>>>16,S+=65535&x,K+=x>>>16,B+=m>>>16,S+=B>>>16,K+=S>>>16,a=65535&S|K<<16,v=65535&m|B<<16,L=o,z=i,R=h,P=a,N=f,O=s,C=u,T=c,I=y,G=l,Z=w,q=v,V=p,X=b,D=g,F=_,d%16===15)for(E=0;E<16;E++)x=Y[E],M=k[E],m=65535&M,B=M>>>16,S=65535&x,K=x>>>16,x=Y[(E+9)%16],M=k[(E+9)%16],m+=65535&M,B+=M>>>16,S+=65535&x,K+=x>>>16,A=Y[(E+1)%16],U=k[(E+1)%16],x=(A>>>1|U<<31)^(A>>>8|U<<24)^A>>>7,M=(U>>>1|A<<31)^(U>>>8|A<<24)^(U>>>7|A<<25),m+=65535&M,B+=M>>>16,S+=65535&x,K+=x>>>16,A=Y[(E+14)%16],U=k[(E+14)%16],x=(A>>>19|U<<13)^(U>>>29|A<<3)^A>>>6,M=(U>>>19|A<<13)^(A>>>29|U<<3)^(U>>>6|A<<26),m+=65535&M,B+=M>>>16,S+=65535&x,K+=x>>>16,B+=m>>>16,S+=B>>>16,K+=S>>>16,Y[E]=65535&S|K<<16,k[E]=65535&m|B<<16;x=T,M=F,m=65535&M,B=M>>>16,S=65535&x,K=x>>>16,x=r[0],M=t[0],m+=65535&M,B+=M>>>16,S+=65535&x,K+=x>>>16,B+=m>>>16,S+=B>>>16,K+=S>>>16,r[0]=T=65535&S|K<<16,t[0]=F=65535&m|B<<16,x=L,M=I,m=65535&M,B=M>>>16,S=65535&x,K=x>>>16,x=r[1],M=t[1],m+=65535&M,B+=M>>>16,S+=65535&x,K+=x>>>16,B+=m>>>16,S+=B>>>16,K+=S>>>16,r[1]=L=65535&S|K<<16,t[1]=I=65535&m|B<<16,x=z,M=G,m=65535&M,B=M>>>16,S=65535&x,K=x>>>16,x=r[2],M=t[2],m+=65535&M,B+=M>>>16,S+=65535&x,K+=x>>>16,B+=m>>>16,S+=B>>>16,K+=S>>>16,r[2]=z=65535&S|K<<16,t[2]=G=65535&m|B<<16,x=R,M=Z,m=65535&M,B=M>>>16,S=65535&x,K=x>>>16,x=r[3],M=t[3],m+=65535&M,B+=M>>>16,S+=65535&x,K+=x>>>16,B+=m>>>16,S+=B>>>16,K+=S>>>16,r[3]=R=65535&S|K<<16,t[3]=Z=65535&m|B<<16,x=P,M=q,m=65535&M,B=M>>>16,S=65535&x,K=x>>>16,x=r[4],M=t[4],m+=65535&M,B+=M>>>16,S+=65535&x,K+=x>>>16,B+=m>>>16,S+=B>>>16,K+=S>>>16,r[4]=P=65535&S|K<<16,t[4]=q=65535&m|B<<16,x=N,M=V,m=65535&M,B=M>>>16,S=65535&x,K=x>>>16,x=r[5],M=t[5],m+=65535&M,B+=M>>>16,S+=65535&x,K+=x>>>16,B+=m>>>16,S+=B>>>16,K+=S>>>16,r[5]=N=65535&S|K<<16,t[5]=V=65535&m|B<<16,x=O,M=X,m=65535&M,B=M>>>16,S=65535&x,K=x>>>16,x=r[6],M=t[6],m+=65535&M,B+=M>>>16,S+=65535&x,K+=x>>>16,B+=m>>>16,S+=B>>>16,K+=S>>>16,r[6]=O=65535&S|K<<16,t[6]=X=65535&m|B<<16,x=C,M=D,m=65535&M,B=M>>>16,S=65535&x,K=x>>>16,x=r[7],M=t[7],m+=65535&M,B+=M>>>16,S+=65535&x,K+=x>>>16,B+=m>>>16,S+=B>>>16,K+=S>>>16,r[7]=C=65535&S|K<<16,t[7]=D=65535&m|B<<16,j+=128,e-=128}return e}function N(r,n,e){var o,i=new Int32Array(8),h=new Int32Array(8),a=new Uint8Array(256),f=e;for(i[0]=1779033703,i[1]=3144134277,i[2]=1013904242,i[3]=2773480762,i[4]=1359893119,i[5]=2600822924,i[6]=528734635,i[7]=1541459225,h[0]=4089235720,h[1]=2227873595,h[2]=4271175723,h[3]=1595750129,h[4]=2917565137,h[5]=725511199,h[6]=4215389547,h[7]=327033209,P(i,h,n,e),e%=128,o=0;o<e;o++)a[o]=n[f-e+o];for(a[e]=128,e=256-128*(e<112?1:0),a[e-9]=0,t(a,e-8,f/536870912|0,f<<3),P(i,h,a,e),o=0;o<8;o++)t(r,8*o,i[o],h[o]);return 0}function O(r,t){var n=$(),e=$(),o=$(),i=$(),h=$(),a=$(),f=$(),s=$(),u=$();M(n,r[1],r[0]),M(u,t[1],t[0]),m(n,n,u),x(e,r[0],r[1]),x(u,t[0],t[1]),m(e,e,u),m(o,r[3],t[3]),m(o,o,ar),m(i,r[2],t[2]),x(i,i,i),M(h,e,n),M(a,i,o),x(f,i,o),x(s,e,n),m(r[0],h,a),m(r[1],s,f),m(r[2],f,a),m(r[3],h,s)}function C(r,t,n){var e;for(e=0;e<4;e++)_(r[e],t[e],n)}function F(r,t){var n=$(),e=$(),o=$();S(o,t[2]),m(n,t[0],o),m(e,t[1],o),A(r,e),r[31]^=d(n)<<7}function I(r,t,n){var e,o;for(b(r[0],er),b(r[1],or),b(r[2],or),b(r[3],er),o=255;o>=0;--o)e=n[o/8|0]>>(7&o)&1,C(r,t,e),O(t,r),O(r,r),C(r,t,e)}function G(r,t){var n=[$(),$(),$(),$()];b(n[0],fr),b(n[1],sr),b(n[2],or),m(n[3],fr,sr),I(r,n,t)}function Z(r,t,n){var e,o=new Uint8Array(64),i=[$(),$(),$(),$()];for(n||rr(t,32),N(o,t,32),o[0]&=248,o[31]&=127,o[31]|=64,G(i,o),F(r,i),e=0;e<32;e++)t[e+32]=r[e];return 0}function q(r,t){var n,e,o,i;for(e=63;e>=32;--e){for(n=0,o=e-32,i=e-12;o<i;++o)t[o]+=n-16*t[e]*pr[o-(e-32)],n=t[o]+128>>8,t[o]-=256*n;t[o]+=n,t[e]=0}for(n=0,o=0;o<32;o++)t[o]+=n-(t[31]>>4)*pr[o],n=t[o]>>8,t[o]&=255;for(o=0;o<32;o++)t[o]-=n*pr[o];for(e=0;e<32;e++)t[e+1]+=t[e]>>8,r[e]=255&t[e]}function V(r){var t,n=new Float64Array(64);for(t=0;t<64;t++)n[t]=r[t];for(t=0;t<64;t++)r[t]=0;q(r,n)}function X(r,t,n,e){var o,i,h=new Uint8Array(64),a=new Uint8Array(64),f=new Uint8Array(64),s=new Float64Array(64),u=[$(),$(),$(),$()];N(h,e,32),h[0]&=248,h[31]&=127,h[31]|=64;var c=n+64;for(o=0;o<n;o++)r[64+o]=t[o];for(o=0;o<32;o++)r[32+o]=h[32+o];for(N(f,r.subarray(32),n+32),V(f),G(u,f),F(r,u),o=32;o<64;o++)r[o]=e[o];for(N(a,r,n+64),V(a),o=0;o<64;o++)s[o]=0;for(o=0;o<32;o++)s[o]=f[o];for(o=0;o<32;o++)for(i=0;i<32;i++)s[o+i]+=a[o]*h[i];return q(r.subarray(32),s),c}function D(r,t){var n=$(),e=$(),o=$(),i=$(),h=$(),a=$(),f=$();return b(r[2],or),E(r[1],t),B(o,r[1]),m(i,o,hr),M(o,o,r[2]),x(i,r[2],i),B(h,i),B(a,h),m(f,a,h),m(n,f,o),m(n,n,i),K(n,n),m(n,n,o),m(n,n,i),m(n,n,i),m(r[0],n,i),B(e,r[0]),m(e,e,i),U(e,o)&&m(r[0],r[0],ur),B(e,r[0]),m(e,e,i),U(e,o)?-1:(d(r[0])===t[31]>>7&&M(r[0],er,r[0]),m(r[3],r[0],r[1]),0)}function j(r,t,n,e){var i,h,a=new Uint8Array(32),f=new Uint8Array(64),s=[$(),$(),$(),$()],u=[$(),$(),$(),$()];if(h=-1,n<64)return-1;if(D(u,e))return-1;for(i=0;i<n;i++)r[i]=t[i];for(i=0;i<32;i++)r[i+32]=e[i];if(N(f,r,n),V(f),I(s,u,f),G(u,t.subarray(32)),O(s,u),F(a,s),n-=64,o(t,0,a,0)){for(i=0;i<n;i++)r[i]=0;return-1}for(i=0;i<n;i++)r[i]=t[i+64];return h=n}function H(r,t){if(r.length!==br)throw new Error("bad key size");if(t.length!==gr)throw new Error("bad nonce size")}function J(r,t){if(r.length!==Er)throw new Error("bad public key size");if(t.length!==xr)throw new Error("bad secret key size")}function Q(){for(var r=0;r<arguments.length;r++)if(!(arguments[r]instanceof Uint8Array))throw new TypeError("unexpected type, use Uint8Array")}function W(r){for(var t=0;t<r.length;t++)r[t]=0}var $=function(r){var t,n=new Float64Array(16);if(r)for(t=0;t<r.length;t++)n[t]=r[t];return n},rr=function(){throw new Error("no PRNG")},tr=new Uint8Array(16),nr=new Uint8Array(32);nr[0]=9;var er=$(),or=$([1]),ir=$([56129,1]),hr=$([30883,4953,19914,30187,55467,16705,2637,112,59544,30585,16505,36039,65139,11119,27886,20995]),ar=$([61785,9906,39828,60374,45398,33411,5274,224,53552,61171,33010,6542,64743,22239,55772,9222]),fr=$([54554,36645,11616,51542,42930,38181,51040,26924,56412,64982,57905,49316,21502,52590,14035,8553]),sr=$([26200,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214]),ur=$([41136,18958,6951,50414,58488,44335,6150,12099,55207,15867,153,11085,57099,20417,9344,11139]),cr=new Uint8Array([101,120,112,97,110,100,32,51,50,45,98,121,116,101,32,107]),yr=function(r){this.buffer=new Uint8Array(16),this.r=new Uint16Array(10),this.h=new Uint16Array(10),this.pad=new Uint16Array(8),this.leftover=0,this.fin=0;var t,n,e,o,i,h,a,f;t=255&r[0]|(255&r[1])<<8,this.r[0]=8191&t,n=255&r[2]|(255&r[3])<<8,this.r[1]=8191&(t>>>13|n<<3),e=255&r[4]|(255&r[5])<<8,this.r[2]=7939&(n>>>10|e<<6),o=255&r[6]|(255&r[7])<<8,this.r[3]=8191&(e>>>7|o<<9),i=255&r[8]|(255&r[9])<<8,this.r[4]=255&(o>>>4|i<<12),this.r[5]=i>>>1&8190,h=255&r[10]|(255&r[11])<<8,this.r[6]=8191&(i>>>14|h<<2),a=255&r[12]|(255&r[13])<<8,this.r[7]=8065&(h>>>11|a<<5),f=255&r[14]|(255&r[15])<<8,this.r[8]=8191&(a>>>8|f<<8),this.r[9]=f>>>5&127,this.pad[0]=255&r[16]|(255&r[17])<<8,this.pad[1]=255&r[18]|(255&r[19])<<8,this.pad[2]=255&r[20]|(255&r[21])<<8,this.pad[3]=255&r[22]|(255&r[23])<<8,this.pad[4]=255&r[24]|(255&r[25])<<8,this.pad[5]=255&r[26]|(255&r[27])<<8,this.pad[6]=255&r[28]|(255&r[29])<<8,this.pad[7]=255&r[30]|(255&r[31])<<8};yr.prototype.blocks=function(r,t,n){for(var e,o,i,h,a,f,s,u,c,y,l,w,v,p,b,g,_,A,U,d=this.fin?0:2048,E=this.h[0],x=this.h[1],M=this.h[2],m=this.h[3],B=this.h[4],S=this.h[5],K=this.h[6],Y=this.h[7],k=this.h[8],T=this.h[9],L=this.r[0],z=this.r[1],R=this.r[2],P=this.r[3],N=this.r[4],O=this.r[5],C=this.r[6],F=this.r[7],I=this.r[8],G=this.r[9];n>=16;)e=255&r[t+0]|(255&r[t+1])<<8,E+=8191&e,o=255&r[t+2]|(255&r[t+3])<<8,x+=8191&(e>>>13|o<<3),i=255&r[t+4]|(255&r[t+5])<<8,M+=8191&(o>>>10|i<<6),h=255&r[t+6]|(255&r[t+7])<<8,m+=8191&(i>>>7|h<<9),a=255&r[t+8]|(255&r[t+9])<<8,B+=8191&(h>>>4|a<<12),S+=a>>>1&8191,f=255&r[t+10]|(255&r[t+11])<<8,K+=8191&(a>>>14|f<<2),s=255&r[t+12]|(255&r[t+13])<<8,Y+=8191&(f>>>11|s<<5),u=255&r[t+14]|(255&r[t+15])<<8,k+=8191&(s>>>8|u<<8),T+=u>>>5|d,c=0,y=c,y+=E*L,y+=x*(5*G),y+=M*(5*I),y+=m*(5*F),y+=B*(5*C),c=y>>>13,y&=8191,y+=S*(5*O),y+=K*(5*N),y+=Y*(5*P),y+=k*(5*R),y+=T*(5*z),c+=y>>>13,y&=8191,l=c,l+=E*z,l+=x*L,l+=M*(5*G),l+=m*(5*I),l+=B*(5*F),c=l>>>13,l&=8191,l+=S*(5*C),l+=K*(5*O),l+=Y*(5*N),l+=k*(5*P),l+=T*(5*R),c+=l>>>13,l&=8191,w=c,w+=E*R,w+=x*z,w+=M*L,w+=m*(5*G),w+=B*(5*I),c=w>>>13,w&=8191,w+=S*(5*F),w+=K*(5*C),w+=Y*(5*O),w+=k*(5*N),w+=T*(5*P),c+=w>>>13,w&=8191,v=c,v+=E*P,v+=x*R,v+=M*z,v+=m*L,v+=B*(5*G),c=v>>>13,v&=8191,v+=S*(5*I),v+=K*(5*F),v+=Y*(5*C),v+=k*(5*O),v+=T*(5*N),c+=v>>>13,v&=8191,p=c,p+=E*N,p+=x*P,p+=M*R,p+=m*z,p+=B*L,c=p>>>13,p&=8191,p+=S*(5*G),p+=K*(5*I),p+=Y*(5*F),p+=k*(5*C),p+=T*(5*O),c+=p>>>13,p&=8191,b=c,b+=E*O,b+=x*N,b+=M*P,b+=m*R,b+=B*z,c=b>>>13,b&=8191,b+=S*L,b+=K*(5*G),b+=Y*(5*I),b+=k*(5*F),b+=T*(5*C),c+=b>>>13,b&=8191,g=c,g+=E*C,g+=x*O,g+=M*N,g+=m*P,g+=B*R,c=g>>>13,g&=8191,g+=S*z,g+=K*L,g+=Y*(5*G),g+=k*(5*I),g+=T*(5*F),c+=g>>>13,g&=8191,_=c,_+=E*F,_+=x*C,_+=M*O,_+=m*N,_+=B*P,c=_>>>13,_&=8191,_+=S*R,_+=K*z,_+=Y*L,_+=k*(5*G),_+=T*(5*I),c+=_>>>13,_&=8191,A=c,A+=E*I,A+=x*F,A+=M*C,A+=m*O,A+=B*N,c=A>>>13,A&=8191,A+=S*P,A+=K*R,A+=Y*z,A+=k*L,A+=T*(5*G),c+=A>>>13,A&=8191,U=c,U+=E*G,U+=x*I,U+=M*F,U+=m*C,U+=B*O,c=U>>>13,U&=8191,U+=S*N,U+=K*P,U+=Y*R,U+=k*z,U+=T*L,c+=U>>>13,U&=8191,c=(c<<2)+c|0,c=c+y|0,y=8191&c,c>>>=13,l+=c,E=y,x=l,M=w,m=v,B=p,S=b,K=g,Y=_,k=A,T=U,t+=16,n-=16;this.h[0]=E,this.h[1]=x,this.h[2]=M,this.h[3]=m,this.h[4]=B,this.h[5]=S,this.h[6]=K,this.h[7]=Y,this.h[8]=k,this.h[9]=T},yr.prototype.finish=function(r,t){var n,e,o,i,h=new Uint16Array(10);if(this.leftover){for(i=this.leftover,this.buffer[i++]=1;i<16;i++)this.buffer[i]=0;this.fin=1,this.blocks(this.buffer,0,16)}for(n=this.h[1]>>>13,this.h[1]&=8191,i=2;i<10;i++)this.h[i]+=n,n=this.h[i]>>>13,this.h[i]&=8191;for(this.h[0]+=5*n,n=this.h[0]>>>13,this.h[0]&=8191,this.h[1]+=n,n=this.h[1]>>>13,this.h[1]&=8191,this.h[2]+=n,h[0]=this.h[0]+5,n=h[0]>>>13,h[0]&=8191,i=1;i<10;i++)h[i]=this.h[i]+n,n=h[i]>>>13,h[i]&=8191;for(h[9]-=8192,e=(1^n)-1,i=0;i<10;i++)h[i]&=e;for(e=~e,i=0;i<10;i++)this.h[i]=this.h[i]&e|h[i];for(this.h[0]=65535&(this.h[0]|this.h[1]<<13),this.h[1]=65535&(this.h[1]>>>3|this.h[2]<<10),this.h[2]=65535&(this.h[2]>>>6|this.h[3]<<7),this.h[3]=65535&(this.h[3]>>>9|this.h[4]<<4),this.h[4]=65535&(this.h[4]>>>12|this.h[5]<<1|this.h[6]<<14),this.h[5]=65535&(this.h[6]>>>2|this.h[7]<<11),this.h[6]=65535&(this.h[7]>>>5|this.h[8]<<8),this.h[7]=65535&(this.h[8]>>>8|this.h[9]<<5),o=this.h[0]+this.pad[0],this.h[0]=65535&o,i=1;i<8;i++)o=(this.h[i]+this.pad[i]|0)+(o>>>16)|0,this.h[i]=65535&o;r[t+0]=this.h[0]>>>0&255,r[t+1]=this.h[0]>>>8&255,r[t+2]=this.h[1]>>>0&255,r[t+3]=this.h[1]>>>8&255,r[t+4]=this.h[2]>>>0&255,r[t+5]=this.h[2]>>>8&255,r[t+6]=this.h[3]>>>0&255,r[t+7]=this.h[3]>>>8&255,r[t+8]=this.h[4]>>>0&255,r[t+9]=this.h[4]>>>8&255,r[t+10]=this.h[5]>>>0&255,r[t+11]=this.h[5]>>>8&255,r[t+12]=this.h[6]>>>0&255,r[t+13]=this.h[6]>>>8&255,r[t+14]=this.h[7]>>>0&255,r[t+15]=this.h[7]>>>8&255},yr.prototype.update=function(r,t,n){var e,o;if(this.leftover){for(o=16-this.leftover,o>n&&(o=n),e=0;e<o;e++)this.buffer[this.leftover+e]=r[t+e];if(n-=o,t+=o,this.leftover+=o,this.leftover<16)return;this.blocks(this.buffer,0,16),this.leftover=0}if(n>=16&&(o=n-n%16,this.blocks(r,t,o),t+=o,n-=o),n){for(e=0;e<n;e++)this.buffer[this.leftover+e]=r[t+e];this.leftover+=n}};var lr=v,wr=p,vr=[1116352408,3609767458,1899447441,602891725,3049323471,3964484399,3921009573,2173295548,961987163,4081628472,1508970993,3053834265,2453635748,2937671579,2870763221,3664609560,3624381080,2734883394,310598401,1164996542,607225278,1323610764,1426881987,3590304994,1925078388,4068182383,2162078206,991336113,2614888103,633803317,3248222580,3479774868,3835390401,2666613458,4022224774,944711139,264347078,2341262773,604807628,2007800933,770255983,1495990901,1249150122,1856431235,1555081692,3175218132,1996064986,2198950837,2554220882,3999719339,2821834349,766784016,2952996808,2566594879,3210313671,3203337956,3336571891,1034457026,3584528711,2466948901,113926993,3758326383,338241895,168717936,666307205,1188179964,773529912,1546045734,1294757372,1522805485,1396182291,2643833823,1695183700,2343527390,1986661051,1014477480,2177026350,1206759142,2456956037,344077627,2730485921,1290863460,2820302411,3158454273,3259730800,3505952657,3345764771,106217008,3516065817,3606008344,3600352804,1432725776,4094571909,1467031594,275423344,851169720,430227734,3100823752,506948616,1363258195,659060556,3750685593,883997877,3785050280,958139571,3318307427,1322822218,3812723403,1537002063,2003034995,1747873779,3602036899,1955562222,1575990012,2024104815,1125592928,2227730452,2716904306,2361852424,442776044,2428436474,593698344,2756734187,3733110249,3204031479,2999351573,3329325298,3815920427,3391569614,3928383900,3515267271,566280711,3940187606,3454069534,4118630271,4000239992,116418474,1914138554,174292421,2731055270,289380356,3203993006,460393269,320620315,685471733,587496836,852142971,1086792851,1017036298,365543100,1126000580,2618297676,1288033470,3409855158,1501505948,4234509866,1607167915,987167468,1816402316,1246189591],pr=new Float64Array([237,211,245,92,26,99,18,88,214,156,247,162,222,249,222,20,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,16]),br=32,gr=24,_r=32,Ar=16,Ur=32,dr=32,Er=32,xr=32,Mr=32,mr=gr,Br=_r,Sr=Ar,Kr=64,Yr=32,kr=64,Tr=32,Lr=64;r.lowlevel={crypto_core_hsalsa20:f,crypto_stream_xor:y,crypto_stream:c,crypto_stream_salsa20_xor:s,crypto_stream_salsa20:u,crypto_onetimeauth:l,crypto_onetimeauth_verify:w,crypto_verify_16:e,crypto_verify_32:o,crypto_secretbox:v,crypto_secretbox_open:p,crypto_scalarmult:Y,crypto_scalarmult_base:k,crypto_box_beforenm:L,crypto_box_afternm:lr,crypto_box:z,crypto_box_open:R,crypto_box_keypair:T,crypto_hash:N,crypto_sign:X,crypto_sign_keypair:Z,crypto_sign_open:j,crypto_secretbox_KEYBYTES:br,crypto_secretbox_NONCEBYTES:gr,crypto_secretbox_ZEROBYTES:_r,crypto_secretbox_BOXZEROBYTES:Ar,crypto_scalarmult_BYTES:Ur,crypto_scalarmult_SCALARBYTES:dr,crypto_box_PUBLICKEYBYTES:Er,crypto_box_SECRETKEYBYTES:xr,crypto_box_BEFORENMBYTES:Mr,crypto_box_NONCEBYTES:mr,crypto_box_ZEROBYTES:Br,crypto_box_BOXZEROBYTES:Sr,crypto_sign_BYTES:Kr,crypto_sign_PUBLICKEYBYTES:Yr,crypto_sign_SECRETKEYBYTES:kr,crypto_sign_SEEDBYTES:Tr,crypto_hash_BYTES:Lr},r.randomBytes=function(r){var t=new Uint8Array(r);return rr(t,r),t},r.secretbox=function(r,t,n){Q(r,t,n),H(n,t);for(var e=new Uint8Array(_r+r.length),o=new Uint8Array(e.length),i=0;i<r.length;i++)e[i+_r]=r[i];return v(o,e,e.length,t,n),o.subarray(Ar)},r.secretbox.open=function(r,t,n){Q(r,t,n),H(n,t);for(var e=new Uint8Array(Ar+r.length),o=new Uint8Array(e.length),i=0;i<r.length;i++)e[i+Ar]=r[i];return e.length<32?null:0!==p(o,e,e.length,t,n)?null:o.subarray(_r)},r.secretbox.keyLength=br,r.secretbox.nonceLength=gr,r.secretbox.overheadLength=Ar,r.scalarMult=function(r,t){if(Q(r,t),r.length!==dr)throw new Error("bad n size");if(t.length!==Ur)throw new Error("bad p size");var n=new Uint8Array(Ur);return Y(n,r,t),n},r.scalarMult.base=function(r){if(Q(r),r.length!==dr)throw new Error("bad n size");var t=new Uint8Array(Ur);return k(t,r),t},r.scalarMult.scalarLength=dr,r.scalarMult.groupElementLength=Ur,r.box=function(t,n,e,o){var i=r.box.before(e,o);return r.secretbox(t,n,i)},r.box.before=function(r,t){Q(r,t),J(r,t);var n=new Uint8Array(Mr);return L(n,r,t),n},r.box.after=r.secretbox,r.box.open=function(t,n,e,o){var i=r.box.before(e,o);return r.secretbox.open(t,n,i)},r.box.open.after=r.secretbox.open,r.box.keyPair=function(){var r=new Uint8Array(Er),t=new Uint8Array(xr);return T(r,t),{publicKey:r,secretKey:t}},r.box.keyPair.fromSecretKey=function(r){if(Q(r),r.length!==xr)throw new Error("bad secret key size");var t=new Uint8Array(Er);return k(t,r),{publicKey:t,secretKey:new Uint8Array(r)}},r.box.publicKeyLength=Er,r.box.secretKeyLength=xr,r.box.sharedKeyLength=Mr,r.box.nonceLength=mr,r.box.overheadLength=r.secretbox.overheadLength,r.sign=function(r,t){if(Q(r,t),t.length!==kr)throw new Error("bad secret key size");var n=new Uint8Array(Kr+r.length);return X(n,r,r.length,t),n},r.sign.open=function(r,t){if(Q(r,t),t.length!==Yr)throw new Error("bad public key size");var n=new Uint8Array(r.length),e=j(n,r,r.length,t);if(e<0)return null;for(var o=new Uint8Array(e),i=0;i<o.length;i++)o[i]=n[i];return o},r.sign.detached=function(t,n){for(var e=r.sign(t,n),o=new Uint8Array(Kr),i=0;i<o.length;i++)o[i]=e[i];return o},r.sign.detached.verify=function(r,t,n){if(Q(r,t,n),t.length!==Kr)throw new Error("bad signature size");if(n.length!==Yr)throw new Error("bad public key size");var e,o=new Uint8Array(Kr+r.length),i=new Uint8Array(Kr+r.length);for(e=0;e<Kr;e++)o[e]=t[e];for(e=0;e<r.length;e++)o[e+Kr]=r[e];return j(i,o,o.length,n)>=0},r.sign.keyPair=function(){var r=new Uint8Array(Yr),t=new Uint8Array(kr);return Z(r,t),{publicKey:r,secretKey:t}},r.sign.keyPair.fromSecretKey=function(r){if(Q(r),r.length!==kr)throw new Error("bad secret key size");for(var t=new Uint8Array(Yr),n=0;n<t.length;n++)t[n]=r[32+n];return{publicKey:t,secretKey:new Uint8Array(r)}},r.sign.keyPair.fromSeed=function(r){if(Q(r),r.length!==Tr)throw new Error("bad seed size");for(var t=new Uint8Array(Yr),n=new Uint8Array(kr),e=0;e<32;e++)n[e]=r[e];return Z(t,n,!0),{publicKey:t,secretKey:n}},r.sign.publicKeyLength=Yr,r.sign.secretKeyLength=kr,r.sign.seedLength=Tr,r.sign.signatureLength=Kr,r.hash=function(r){Q(r);var t=new Uint8Array(Lr);return N(t,r,r.length),t},r.hash.hashLength=Lr,r.verify=function(r,t){return Q(r,t),0!==r.length&&0!==t.length&&(r.length===t.length&&0===n(r,0,t,0,r.length))},r.setPRNG=function(r){rr=r},function(){var t="undefined"!=typeof self?self.crypto||self.msCrypto:null;if(t&&t.getRandomValues){var n=65536;r.setPRNG(function(r,e){var o,i=new Uint8Array(e);for(o=0;o<e;o+=n)t.getRandomValues(i.subarray(o,o+Math.min(e-o,n)));for(o=0;o<e;o++)r[o]=i[o];W(i)})}else"undefined"!=typeof require&&(t=require("crypto"),
t&&t.randomBytes&&r.setPRNG(function(r,n){var e,o=t.randomBytes(n);for(e=0;e<n;e++)r[e]=o[e];W(o)}))}()}("undefined"!=typeof module&&module.exports?module.exports:self.nacl=self.nacl||{});!function(e,n){"use strict";"undefined"!=typeof module&&module.exports?module.exports=n():e.nacl?e.nacl.util=n():(e.nacl={},e.nacl.util=n())}(this,function(){"use strict";function e(e){if(!/^(?:[A-Za-z0-9+\/]{4})*(?:[A-Za-z0-9+\/]{2}==|[A-Za-z0-9+\/]{3}=)?$/.test(e))throw new TypeError("invalid encoding")}var n={};return n.decodeUTF8=function(e){if("string"!=typeof e)throw new TypeError("expected string");var n,r=unescape(encodeURIComponent(e)),t=new Uint8Array(r.length);for(n=0;n<r.length;n++)t[n]=r.charCodeAt(n);return t},n.encodeUTF8=function(e){var n,r=[];for(n=0;n<e.length;n++)r.push(String.fromCharCode(e[n]));return decodeURIComponent(escape(r.join("")))},"undefined"==typeof atob?"undefined"!=typeof Buffer.from?(n.encodeBase64=function(e){return Buffer.from(e).toString("base64")},n.decodeBase64=function(n){return e(n),new Uint8Array(Array.prototype.slice.call(Buffer.from(n,"base64"),0))}):(n.encodeBase64=function(e){return new Buffer(e).toString("base64")},n.decodeBase64=function(n){return e(n),new Uint8Array(Array.prototype.slice.call(new Buffer(n,"base64"),0))}):(n.encodeBase64=function(e){var n,r=[],t=e.length;for(n=0;n<t;n++)r.push(String.fromCharCode(e[n]));return btoa(r.join(""))},n.decodeBase64=function(n){e(n);var r,t=atob(n),o=new Uint8Array(t.length);for(r=0;r<t.length;r++)o[r]=t.charCodeAt(r);return o}),n});"use strict";var sjcl={cipher:{},hash:{},keyexchange:{},mode:{},misc:{},codec:{},exception:{corrupt:function(a){this.toString=function(){return"CORRUPT: "+this.message};this.message=a},invalid:function(a){this.toString=function(){return"INVALID: "+this.message};this.message=a},bug:function(a){this.toString=function(){return"BUG: "+this.message};this.message=a},notReady:function(a){this.toString=function(){return"NOT READY: "+this.message};this.message=a}}};
sjcl.cipher.aes=function(a){this._tables[0][0][0]||this._precompute();var b,c,d,e,f=this._tables[0][4],g=this._tables[1];b=a.length;var h=1;if(4!==b&&6!==b&&8!==b)throw new sjcl.exception.invalid("invalid aes key size");this._key=[d=a.slice(0),e=[]];for(a=b;a<4*b+28;a++){c=d[a-1];if(0===a%b||8===b&&4===a%b)c=f[c>>>24]<<24^f[c>>16&255]<<16^f[c>>8&255]<<8^f[c&255],0===a%b&&(c=c<<8^c>>>24^h<<24,h=h<<1^283*(h>>7));d[a]=d[a-b]^c}for(b=0;a;b++,a--)c=d[b&3?a:a-4],e[b]=4>=a||4>b?c:g[0][f[c>>>24]]^g[1][f[c>>
16&255]]^g[2][f[c>>8&255]]^g[3][f[c&255]]};
sjcl.cipher.aes.prototype={encrypt:function(a){return this._crypt(a,0)},decrypt:function(a){return this._crypt(a,1)},_tables:[[[],[],[],[],[]],[[],[],[],[],[]]],_precompute:function(){var a=this._tables[0],b=this._tables[1],c=a[4],d=b[4],e,f,g,h=[],k=[],l,m,n,p;for(e=0;0x100>e;e++)k[(h[e]=e<<1^283*(e>>7))^e]=e;for(f=g=0;!c[f];f^=l||1,g=k[g]||1)for(n=g^g<<1^g<<2^g<<3^g<<4,n=n>>8^n&255^99,c[f]=n,d[n]=f,m=h[e=h[l=h[f]]],p=0x1010101*m^0x10001*e^0x101*l^0x1010100*f,m=0x101*h[n]^0x1010100*n,e=0;4>e;e++)a[e][f]=m=
m<<24^m>>>8,b[e][n]=p=p<<24^p>>>8;for(e=0;5>e;e++)a[e]=a[e].slice(0),b[e]=b[e].slice(0)},_crypt:function(a,b){if(4!==a.length)throw new sjcl.exception.invalid("invalid aes block size");var c=this._key[b],d=a[0]^c[0],e=a[b?3:1]^c[1],f=a[2]^c[2],g=a[b?1:3]^c[3],h,k,l,m=c.length/4-2,n,p=4,r=[0,0,0,0];h=this._tables[b];var q=h[0],t=h[1],u=h[2],v=h[3],w=h[4];for(n=0;n<m;n++)h=q[d>>>24]^t[e>>16&255]^u[f>>8&255]^v[g&255]^c[p],k=q[e>>>24]^t[f>>16&255]^u[g>>8&255]^v[d&255]^c[p+1],l=q[f>>>24]^t[g>>16&255]^
u[d>>8&255]^v[e&255]^c[p+2],g=q[g>>>24]^t[d>>16&255]^u[e>>8&255]^v[f&255]^c[p+3],p+=4,d=h,e=k,f=l;for(n=0;4>n;n++)r[b?3&-n:n]=w[d>>>24]<<24^w[e>>16&255]<<16^w[f>>8&255]<<8^w[g&255]^c[p++],h=d,d=e,e=f,f=g,g=h;return r}};
sjcl.bitArray={bitSlice:function(a,b,c){a=sjcl.bitArray._shiftRight(a.slice(b/32),32-(b&31)).slice(1);return void 0===c?a:sjcl.bitArray.clamp(a,c-b)},extract:function(a,b,c){var d=Math.floor(-b-c&31);return((b+c-1^b)&-32?a[b/32|0]<<32-d^a[b/32+1|0]>>>d:a[b/32|0]>>>d)&(1<<c)-1},concat:function(a,b){if(0===a.length||0===b.length)return a.concat(b);var c=a[a.length-1],d=sjcl.bitArray.getPartial(c);return 32===d?a.concat(b):sjcl.bitArray._shiftRight(b,d,c|0,a.slice(0,a.length-1))},bitLength:function(a){var b=
a.length;return 0===b?0:32*(b-1)+sjcl.bitArray.getPartial(a[b-1])},clamp:function(a,b){if(32*a.length<b)return a;a=a.slice(0,Math.ceil(b/32));var c=a.length;b&=31;0<c&&b&&(a[c-1]=sjcl.bitArray.partial(b,a[c-1]&2147483648>>b-1,1));return a},partial:function(a,b,c){return 32===a?b:(c?b|0:b<<32-a)+0x10000000000*a},getPartial:function(a){return Math.round(a/0x10000000000)||32},equal:function(a,b){if(sjcl.bitArray.bitLength(a)!==sjcl.bitArray.bitLength(b))return!1;var c=0,d;for(d=0;d<a.length;d++)c|=a[d]^
b[d];return 0===c},_shiftRight:function(a,b,c,d){var e;e=0;for(void 0===d&&(d=[]);32<=b;b-=32)d.push(c),c=0;if(0===b)return d.concat(a);for(e=0;e<a.length;e++)d.push(c|a[e]>>>b),c=a[e]<<32-b;e=a.length?a[a.length-1]:0;a=sjcl.bitArray.getPartial(e);d.push(sjcl.bitArray.partial(b+a&31,32<b+a?c:d.pop(),1));return d},_xor4:function(a,b){return[a[0]^b[0],a[1]^b[1],a[2]^b[2],a[3]^b[3]]},byteswapM:function(a){var b,c;for(b=0;b<a.length;++b)c=a[b],a[b]=c>>>24|c>>>8&0xff00|(c&0xff00)<<8|c<<24;return a}};
sjcl.codec.bytes={fromBits:function(a){var b=[],c=sjcl.bitArray.bitLength(a),d,e;for(d=0;d<c/8;d++)0===(d&3)&&(e=a[d/4]),b.push(e>>>24),e<<=8;return b},toBits:function(a){var b=[],c,d=0;for(c=0;c<a.length;c++)d=d<<8|a[c],3===(c&3)&&(b.push(d),d=0);c&3&&b.push(sjcl.bitArray.partial(8*(c&3),d));return b}};
sjcl.codec.utf8String={fromBits:function(a){var b="",c=sjcl.bitArray.bitLength(a),d,e;for(d=0;d<c/8;d++)0===(d&3)&&(e=a[d/4]),b+=String.fromCharCode(e>>>8>>>8>>>8),e<<=8;return decodeURIComponent(escape(b))},toBits:function(a){a=unescape(encodeURIComponent(a));var b=[],c,d=0;for(c=0;c<a.length;c++)d=d<<8|a.charCodeAt(c),3===(c&3)&&(b.push(d),d=0);c&3&&b.push(sjcl.bitArray.partial(8*(c&3),d));return b}};
sjcl.codec.hex={fromBits:function(a){var b="",c;for(c=0;c<a.length;c++)b+=((a[c]|0)+0xf00000000000).toString(16).substr(4);return b.substr(0,sjcl.bitArray.bitLength(a)/4)},toBits:function(a){var b,c=[],d;a=a.replace(/\s|0x/g,"");d=a.length;a+="00000000";for(b=0;b<a.length;b+=8)c.push(parseInt(a.substr(b,8),16)^0);return sjcl.bitArray.clamp(c,4*d)}};
sjcl.codec.base32={_chars:"ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",_hexChars:"0123456789ABCDEFGHIJKLMNOPQRSTUV",BITS:32,BASE:5,REMAINING:27,fromBits:function(a,b,c){var d=sjcl.codec.base32.BASE,e=sjcl.codec.base32.REMAINING,f="",g=0,h=sjcl.codec.base32._chars,k=0,l=sjcl.bitArray.bitLength(a);c&&(h=sjcl.codec.base32._hexChars);for(c=0;f.length*d<l;)f+=h.charAt((k^a[c]>>>g)>>>e),g<d?(k=a[c]<<d-g,g+=e,c++):(k<<=d,g-=d);for(;f.length&7&&!b;)f+="=";return f},toBits:function(a,b){a=a.replace(/\s|=/g,"").toUpperCase();
var c=sjcl.codec.base32.BITS,d=sjcl.codec.base32.BASE,e=sjcl.codec.base32.REMAINING,f=[],g,h=0,k=sjcl.codec.base32._chars,l=0,m,n="base32";b&&(k=sjcl.codec.base32._hexChars,n="base32hex");for(g=0;g<a.length;g++){m=k.indexOf(a.charAt(g));if(0>m){if(!b)try{return sjcl.codec.base32hex.toBits(a)}catch(p){}throw new sjcl.exception.invalid("this isn't "+n+"!");}h>e?(h-=e,f.push(l^m>>>h),l=m<<c-h):(h+=d,l^=m<<c-h)}h&56&&f.push(sjcl.bitArray.partial(h&56,l,1));return f}};
sjcl.codec.base32hex={fromBits:function(a,b){return sjcl.codec.base32.fromBits(a,b,1)},toBits:function(a){return sjcl.codec.base32.toBits(a,1)}};
sjcl.codec.base64={_chars:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",fromBits:function(a,b,c){var d="",e=0,f=sjcl.codec.base64._chars,g=0,h=sjcl.bitArray.bitLength(a);c&&(f=f.substr(0,62)+"-_");for(c=0;6*d.length<h;)d+=f.charAt((g^a[c]>>>e)>>>26),6>e?(g=a[c]<<6-e,e+=26,c++):(g<<=6,e-=6);for(;d.length&3&&!b;)d+="=";return d},toBits:function(a,b){a=a.replace(/\s|=/g,"");var c=[],d,e=0,f=sjcl.codec.base64._chars,g=0,h;b&&(f=f.substr(0,62)+"-_");for(d=0;d<a.length;d++){h=f.indexOf(a.charAt(d));
if(0>h)throw new sjcl.exception.invalid("this isn't base64!");26<e?(e-=26,c.push(g^h>>>e),g=h<<32-e):(e+=6,g^=h<<32-e)}e&56&&c.push(sjcl.bitArray.partial(e&56,g,1));return c}};sjcl.codec.base64url={fromBits:function(a){return sjcl.codec.base64.fromBits(a,1,1)},toBits:function(a){return sjcl.codec.base64.toBits(a,1)}};sjcl.hash.sha1=function(a){a?(this._h=a._h.slice(0),this._buffer=a._buffer.slice(0),this._length=a._length):this.reset()};sjcl.hash.sha1.hash=function(a){return(new sjcl.hash.sha1).update(a).finalize()};
sjcl.hash.sha1.prototype={blockSize:512,reset:function(){this._h=this._init.slice(0);this._buffer=[];this._length=0;return this},update:function(a){"string"===typeof a&&(a=sjcl.codec.utf8String.toBits(a));var b,c=this._buffer=sjcl.bitArray.concat(this._buffer,a);b=this._length;a=this._length=b+sjcl.bitArray.bitLength(a);if(0x1fffffffffffff<a)throw new sjcl.exception.invalid("Cannot hash more than 2^53 - 1 bits");if("undefined"!==typeof Uint32Array){var d=new Uint32Array(c),e=0;for(b=this.blockSize+
b-(this.blockSize+b&this.blockSize-1);b<=a;b+=this.blockSize)this._block(d.subarray(16*e,16*(e+1))),e+=1;c.splice(0,16*e)}else for(b=this.blockSize+b-(this.blockSize+b&this.blockSize-1);b<=a;b+=this.blockSize)this._block(c.splice(0,16));return this},finalize:function(){var a,b=this._buffer,c=this._h,b=sjcl.bitArray.concat(b,[sjcl.bitArray.partial(1,1)]);for(a=b.length+2;a&15;a++)b.push(0);b.push(Math.floor(this._length/0x100000000));for(b.push(this._length|0);b.length;)this._block(b.splice(0,16));
this.reset();return c},_init:[1732584193,4023233417,2562383102,271733878,3285377520],_key:[1518500249,1859775393,2400959708,3395469782],_f:function(a,b,c,d){if(19>=a)return b&c|~b&d;if(39>=a)return b^c^d;if(59>=a)return b&c|b&d|c&d;if(79>=a)return b^c^d},_S:function(a,b){return b<<a|b>>>32-a},_block:function(a){var b,c,d,e,f,g,h=this._h,k;if("undefined"!==typeof Uint32Array)for(k=Array(80),b=0;16>b;b++)k[b]=a[b];else k=a;c=h[0];d=h[1];e=h[2];f=h[3];g=h[4];for(a=0;79>=a;a++)16<=a&&(k[a]=this._S(1,
k[a-3]^k[a-8]^k[a-14]^k[a-16])),b=this._S(5,c)+this._f(a,d,e,f)+g+k[a]+this._key[Math.floor(a/20)]|0,g=f,f=e,e=this._S(30,d),d=c,c=b;h[0]=h[0]+c|0;h[1]=h[1]+d|0;h[2]=h[2]+e|0;h[3]=h[3]+f|0;h[4]=h[4]+g|0}};sjcl.hash.sha256=function(a){this._key[0]||this._precompute();a?(this._h=a._h.slice(0),this._buffer=a._buffer.slice(0),this._length=a._length):this.reset()};sjcl.hash.sha256.hash=function(a){return(new sjcl.hash.sha256).update(a).finalize()};
sjcl.hash.sha256.prototype={blockSize:512,reset:function(){this._h=this._init.slice(0);this._buffer=[];this._length=0;return this},update:function(a){"string"===typeof a&&(a=sjcl.codec.utf8String.toBits(a));var b,c=this._buffer=sjcl.bitArray.concat(this._buffer,a);b=this._length;a=this._length=b+sjcl.bitArray.bitLength(a);if(0x1fffffffffffff<a)throw new sjcl.exception.invalid("Cannot hash more than 2^53 - 1 bits");if("undefined"!==typeof Uint32Array){var d=new Uint32Array(c),e=0;for(b=512+b-(512+
b&0x1ff);b<=a;b+=512)this._block(d.subarray(16*e,16*(e+1))),e+=1;c.splice(0,16*e)}else for(b=512+b-(512+b&0x1ff);b<=a;b+=512)this._block(c.splice(0,16));return this},finalize:function(){var a,b=this._buffer,c=this._h,b=sjcl.bitArray.concat(b,[sjcl.bitArray.partial(1,1)]);for(a=b.length+2;a&15;a++)b.push(0);b.push(Math.floor(this._length/0x100000000));for(b.push(this._length|0);b.length;)this._block(b.splice(0,16));this.reset();return c},_init:[],_key:[],_precompute:function(){function a(a){return 0x100000000*
(a-Math.floor(a))|0}for(var b=0,c=2,d,e;64>b;c++){e=!0;for(d=2;d*d<=c;d++)if(0===c%d){e=!1;break}e&&(8>b&&(this._init[b]=a(Math.pow(c,.5))),this._key[b]=a(Math.pow(c,1/3)),b++)}},_block:function(a){var b,c,d,e=this._h,f=this._key,g=e[0],h=e[1],k=e[2],l=e[3],m=e[4],n=e[5],p=e[6],r=e[7];for(b=0;64>b;b++)16>b?c=a[b]:(c=a[b+1&15],d=a[b+14&15],c=a[b&15]=(c>>>7^c>>>18^c>>>3^c<<25^c<<14)+(d>>>17^d>>>19^d>>>10^d<<15^d<<13)+a[b&15]+a[b+9&15]|0),c=c+r+(m>>>6^m>>>11^m>>>25^m<<26^m<<21^m<<7)+(p^m&(n^p))+f[b],
r=p,p=n,n=m,m=l+c|0,l=k,k=h,h=g,g=c+(h&k^l&(h^k))+(h>>>2^h>>>13^h>>>22^h<<30^h<<19^h<<10)|0;e[0]=e[0]+g|0;e[1]=e[1]+h|0;e[2]=e[2]+k|0;e[3]=e[3]+l|0;e[4]=e[4]+m|0;e[5]=e[5]+n|0;e[6]=e[6]+p|0;e[7]=e[7]+r|0}};
sjcl.mode.ccm={name:"ccm",_progressListeners:[],listenProgress:function(a){sjcl.mode.ccm._progressListeners.push(a)},unListenProgress:function(a){a=sjcl.mode.ccm._progressListeners.indexOf(a);-1<a&&sjcl.mode.ccm._progressListeners.splice(a,1)},_callProgressListener:function(a){var b=sjcl.mode.ccm._progressListeners.slice(),c;for(c=0;c<b.length;c+=1)b[c](a)},encrypt:function(a,b,c,d,e){var f,g=b.slice(0),h=sjcl.bitArray,k=h.bitLength(c)/8,l=h.bitLength(g)/8;e=e||64;d=d||[];if(7>k)throw new sjcl.exception.invalid("ccm: iv must be at least 7 bytes");
for(f=2;4>f&&l>>>8*f;f++);f<15-k&&(f=15-k);c=h.clamp(c,8*(15-f));b=sjcl.mode.ccm._computeTag(a,b,c,d,e,f);g=sjcl.mode.ccm._ctrMode(a,g,c,b,e,f);return h.concat(g.data,g.tag)},decrypt:function(a,b,c,d,e){e=e||64;d=d||[];var f=sjcl.bitArray,g=f.bitLength(c)/8,h=f.bitLength(b),k=f.clamp(b,h-e),l=f.bitSlice(b,h-e),h=(h-e)/8;if(7>g)throw new sjcl.exception.invalid("ccm: iv must be at least 7 bytes");for(b=2;4>b&&h>>>8*b;b++);b<15-g&&(b=15-g);c=f.clamp(c,8*(15-b));k=sjcl.mode.ccm._ctrMode(a,k,c,l,e,b);
a=sjcl.mode.ccm._computeTag(a,k.data,c,d,e,b);if(!f.equal(k.tag,a))throw new sjcl.exception.corrupt("ccm: tag doesn't match");return k.data},_macAdditionalData:function(a,b,c,d,e,f){var g=[],h=sjcl.bitArray,k=h._xor4;d=[h.partial(8,(b.length?64:0)|d-2<<2|f-1)];d=h.concat(d,c);d[3]|=e;d=a.encrypt(d);if(b.length)for(c=h.bitLength(b)/8,65279>=c?g=[h.partial(16,c)]:0xffffffff>=c&&(g=h.concat([h.partial(16,65534)],[c])),g=h.concat(g,b),b=0;b<g.length;b+=4)d=a.encrypt(k(d,g.slice(b,b+4).concat([0,0,0])));
return d},_computeTag:function(a,b,c,d,e,f){var g=sjcl.bitArray,h=g._xor4;e/=8;if(e%2||4>e||16<e)throw new sjcl.exception.invalid("ccm: invalid tag length");if(0xffffffff<d.length||0xffffffff<b.length)throw new sjcl.exception.bug("ccm: can't deal with 4GiB or more data");c=sjcl.mode.ccm._macAdditionalData(a,d,c,e,g.bitLength(b)/8,f);for(d=0;d<b.length;d+=4)c=a.encrypt(h(c,b.slice(d,d+4).concat([0,0,0])));return g.clamp(c,8*e)},_ctrMode:function(a,b,c,d,e,f){var g,h=sjcl.bitArray;g=h._xor4;var k=b.length,
l=h.bitLength(b),m=k/50,n=m;c=h.concat([h.partial(8,f-1)],c).concat([0,0,0]).slice(0,4);d=h.bitSlice(g(d,a.encrypt(c)),0,e);if(!k)return{tag:d,data:[]};for(g=0;g<k;g+=4)g>m&&(sjcl.mode.ccm._callProgressListener(g/k),m+=n),c[3]++,e=a.encrypt(c),b[g]^=e[0],b[g+1]^=e[1],b[g+2]^=e[2],b[g+3]^=e[3];return{tag:d,data:h.clamp(b,l)}}};
sjcl.mode.ocb2={name:"ocb2",encrypt:function(a,b,c,d,e,f){if(128!==sjcl.bitArray.bitLength(c))throw new sjcl.exception.invalid("ocb iv must be 128 bits");var g,h=sjcl.mode.ocb2._times2,k=sjcl.bitArray,l=k._xor4,m=[0,0,0,0];c=h(a.encrypt(c));var n,p=[];d=d||[];e=e||64;for(g=0;g+4<b.length;g+=4)n=b.slice(g,g+4),m=l(m,n),p=p.concat(l(c,a.encrypt(l(c,n)))),c=h(c);n=b.slice(g);b=k.bitLength(n);g=a.encrypt(l(c,[0,0,0,b]));n=k.clamp(l(n.concat([0,0,0]),g),b);m=l(m,l(n.concat([0,0,0]),g));m=a.encrypt(l(m,
l(c,h(c))));d.length&&(m=l(m,f?d:sjcl.mode.ocb2.pmac(a,d)));return p.concat(k.concat(n,k.clamp(m,e)))},decrypt:function(a,b,c,d,e,f){if(128!==sjcl.bitArray.bitLength(c))throw new sjcl.exception.invalid("ocb iv must be 128 bits");e=e||64;var g=sjcl.mode.ocb2._times2,h=sjcl.bitArray,k=h._xor4,l=[0,0,0,0],m=g(a.encrypt(c)),n,p,r=sjcl.bitArray.bitLength(b)-e,q=[];d=d||[];for(c=0;c+4<r/32;c+=4)n=k(m,a.decrypt(k(m,b.slice(c,c+4)))),l=k(l,n),q=q.concat(n),m=g(m);p=r-32*c;n=a.encrypt(k(m,[0,0,0,p]));n=k(n,
h.clamp(b.slice(c),p).concat([0,0,0]));l=k(l,n);l=a.encrypt(k(l,k(m,g(m))));d.length&&(l=k(l,f?d:sjcl.mode.ocb2.pmac(a,d)));if(!h.equal(h.clamp(l,e),h.bitSlice(b,r)))throw new sjcl.exception.corrupt("ocb: tag doesn't match");return q.concat(h.clamp(n,p))},pmac:function(a,b){var c,d=sjcl.mode.ocb2._times2,e=sjcl.bitArray,f=e._xor4,g=[0,0,0,0],h=a.encrypt([0,0,0,0]),h=f(h,d(d(h)));for(c=0;c+4<b.length;c+=4)h=d(h),g=f(g,a.encrypt(f(h,b.slice(c,c+4))));c=b.slice(c);128>e.bitLength(c)&&(h=f(h,d(h)),c=
e.concat(c,[-2147483648,0,0,0]));g=f(g,c);return a.encrypt(f(d(f(h,d(h))),g))},_times2:function(a){return[a[0]<<1^a[1]>>>31,a[1]<<1^a[2]>>>31,a[2]<<1^a[3]>>>31,a[3]<<1^135*(a[0]>>>31)]}};
sjcl.mode.gcm={name:"gcm",encrypt:function(a,b,c,d,e){var f=b.slice(0);b=sjcl.bitArray;d=d||[];a=sjcl.mode.gcm._ctrMode(!0,a,f,d,c,e||128);return b.concat(a.data,a.tag)},decrypt:function(a,b,c,d,e){var f=b.slice(0),g=sjcl.bitArray,h=g.bitLength(f);e=e||128;d=d||[];e<=h?(b=g.bitSlice(f,h-e),f=g.bitSlice(f,0,h-e)):(b=f,f=[]);a=sjcl.mode.gcm._ctrMode(!1,a,f,d,c,e);if(!g.equal(a.tag,b))throw new sjcl.exception.corrupt("gcm: tag doesn't match");return a.data},_galoisMultiply:function(a,b){var c,d,e,f,
g,h=sjcl.bitArray._xor4;e=[0,0,0,0];f=b.slice(0);for(c=0;128>c;c++){(d=0!==(a[Math.floor(c/32)]&1<<31-c%32))&&(e=h(e,f));g=0!==(f[3]&1);for(d=3;0<d;d--)f[d]=f[d]>>>1|(f[d-1]&1)<<31;f[0]>>>=1;g&&(f[0]^=-0x1f000000)}return e},_ghash:function(a,b,c){var d,e=c.length;b=b.slice(0);for(d=0;d<e;d+=4)b[0]^=0xffffffff&c[d],b[1]^=0xffffffff&c[d+1],b[2]^=0xffffffff&c[d+2],b[3]^=0xffffffff&c[d+3],b=sjcl.mode.gcm._galoisMultiply(b,a);return b},_ctrMode:function(a,b,c,d,e,f){var g,h,k,l,m,n,p,r,q=sjcl.bitArray;
n=c.length;p=q.bitLength(c);r=q.bitLength(d);h=q.bitLength(e);g=b.encrypt([0,0,0,0]);96===h?(e=e.slice(0),e=q.concat(e,[1])):(e=sjcl.mode.gcm._ghash(g,[0,0,0,0],e),e=sjcl.mode.gcm._ghash(g,e,[0,0,Math.floor(h/0x100000000),h&0xffffffff]));h=sjcl.mode.gcm._ghash(g,[0,0,0,0],d);m=e.slice(0);d=h.slice(0);a||(d=sjcl.mode.gcm._ghash(g,h,c));for(l=0;l<n;l+=4)m[3]++,k=b.encrypt(m),c[l]^=k[0],c[l+1]^=k[1],c[l+2]^=k[2],c[l+3]^=k[3];c=q.clamp(c,p);a&&(d=sjcl.mode.gcm._ghash(g,h,c));a=[Math.floor(r/0x100000000),
r&0xffffffff,Math.floor(p/0x100000000),p&0xffffffff];d=sjcl.mode.gcm._ghash(g,d,a);k=b.encrypt(e);d[0]^=k[0];d[1]^=k[1];d[2]^=k[2];d[3]^=k[3];return{tag:q.bitSlice(d,0,f),data:c}}};sjcl.misc.hmac=function(a,b){this._hash=b=b||sjcl.hash.sha256;var c=[[],[]],d,e=b.prototype.blockSize/32;this._baseHash=[new b,new b];a.length>e&&(a=b.hash(a));for(d=0;d<e;d++)c[0][d]=a[d]^909522486,c[1][d]=a[d]^1549556828;this._baseHash[0].update(c[0]);this._baseHash[1].update(c[1]);this._resultHash=new b(this._baseHash[0])};
sjcl.misc.hmac.prototype.encrypt=sjcl.misc.hmac.prototype.mac=function(a){if(this._updated)throw new sjcl.exception.invalid("encrypt on already updated hmac called!");this.update(a);return this.digest(a)};sjcl.misc.hmac.prototype.reset=function(){this._resultHash=new this._hash(this._baseHash[0]);this._updated=!1};sjcl.misc.hmac.prototype.update=function(a){this._updated=!0;this._resultHash.update(a)};
sjcl.misc.hmac.prototype.digest=function(){var a=this._resultHash.finalize(),a=(new this._hash(this._baseHash[1])).update(a).finalize();this.reset();return a};
sjcl.misc.pbkdf2=function(a,b,c,d,e){c=c||1E4;if(0>d||0>c)throw new sjcl.exception.invalid("invalid params to pbkdf2");"string"===typeof a&&(a=sjcl.codec.utf8String.toBits(a));"string"===typeof b&&(b=sjcl.codec.utf8String.toBits(b));e=e||sjcl.misc.hmac;a=new e(a);var f,g,h,k,l=[],m=sjcl.bitArray;for(k=1;32*l.length<(d||1);k++){e=f=a.encrypt(m.concat(b,[k]));for(g=1;g<c;g++)for(f=a.encrypt(f),h=0;h<f.length;h++)e[h]^=f[h];l=l.concat(e)}d&&(l=m.clamp(l,d));return l};
sjcl.prng=function(a){this._pools=[new sjcl.hash.sha256];this._poolEntropy=[0];this._reseedCount=0;this._robins={};this._eventId=0;this._collectorIds={};this._nextReseed=this._poolStrength=this._strength=this._collectorIdNext=0;this._key=[0,0,0,0,0,0,0,0];this._counter=[0,0,0,0];this._cipher=void 0;this._defaultParanoia=a;this._collectorsStarted=!1;this._callbacks={progress:{},seeded:{}};this._NOT_READY=this._callbackI=0;this._READY=1;this._REQUIRES_RESEED=2;this._MAX_WORDS_PER_BURST=0x10000;this._PARANOIA_LEVELS=
[0,48,64,96,128,192,0x100,384,512,768,1024];this._MILLISECONDS_PER_RESEED=3E4;this._BITS_PER_RESEED=80};
sjcl.prng.prototype={randomWords:function(a,b){var c=[],d;d=this.isReady(b);var e;if(d===this._NOT_READY)throw new sjcl.exception.notReady("generator isn't seeded");d&this._REQUIRES_RESEED&&this._reseedFromPools(!(d&this._READY));for(d=0;d<a;d+=4)0===(d+1)%this._MAX_WORDS_PER_BURST&&this._gate(),e=this._gen4words(),c.push(e[0],e[1],e[2],e[3]);this._gate();return c.slice(0,a)},setDefaultParanoia:function(a,b){if(0===a&&"Setting paranoia=0 will ruin your security; use it only for testing"!==b)throw new sjcl.exception.invalid("Setting paranoia=0 will ruin your security; use it only for testing");
this._defaultParanoia=a},addEntropy:function(a,b,c){c=c||"user";var d,e,f=(new Date).valueOf(),g=this._robins[c],h=this.isReady(),k=0;d=this._collectorIds[c];void 0===d&&(d=this._collectorIds[c]=this._collectorIdNext++);void 0===g&&(g=this._robins[c]=0);this._robins[c]=(this._robins[c]+1)%this._pools.length;switch(typeof a){case "number":void 0===b&&(b=1);this._pools[g].update([d,this._eventId++,1,b,f,1,a|0]);break;case "object":c=Object.prototype.toString.call(a);if("[object Uint32Array]"===c){e=
[];for(c=0;c<a.length;c++)e.push(a[c]);a=e}else for("[object Array]"!==c&&(k=1),c=0;c<a.length&&!k;c++)"number"!==typeof a[c]&&(k=1);if(!k){if(void 0===b)for(c=b=0;c<a.length;c++)for(e=a[c];0<e;)b++,e>>>=1;this._pools[g].update([d,this._eventId++,2,b,f,a.length].concat(a))}break;case "string":void 0===b&&(b=a.length);this._pools[g].update([d,this._eventId++,3,b,f,a.length]);this._pools[g].update(a);break;default:k=1}if(k)throw new sjcl.exception.bug("random: addEntropy only supports number, array of numbers or string");
this._poolEntropy[g]+=b;this._poolStrength+=b;h===this._NOT_READY&&(this.isReady()!==this._NOT_READY&&this._fireEvent("seeded",Math.max(this._strength,this._poolStrength)),this._fireEvent("progress",this.getProgress()))},isReady:function(a){a=this._PARANOIA_LEVELS[void 0!==a?a:this._defaultParanoia];return this._strength&&this._strength>=a?this._poolEntropy[0]>this._BITS_PER_RESEED&&(new Date).valueOf()>this._nextReseed?this._REQUIRES_RESEED|this._READY:this._READY:this._poolStrength>=a?this._REQUIRES_RESEED|
this._NOT_READY:this._NOT_READY},getProgress:function(a){a=this._PARANOIA_LEVELS[a?a:this._defaultParanoia];return this._strength>=a?1:this._poolStrength>a?1:this._poolStrength/a},startCollectors:function(){if(!this._collectorsStarted){this._eventListener={loadTimeCollector:this._bind(this._loadTimeCollector),mouseCollector:this._bind(this._mouseCollector),keyboardCollector:this._bind(this._keyboardCollector),accelerometerCollector:this._bind(this._accelerometerCollector),touchCollector:this._bind(this._touchCollector)};
if(window.addEventListener)window.addEventListener("load",this._eventListener.loadTimeCollector,!1),window.addEventListener("mousemove",this._eventListener.mouseCollector,!1),window.addEventListener("keypress",this._eventListener.keyboardCollector,!1),window.addEventListener("devicemotion",this._eventListener.accelerometerCollector,!1),window.addEventListener("touchmove",this._eventListener.touchCollector,!1);else if(document.attachEvent)document.attachEvent("onload",this._eventListener.loadTimeCollector),
document.attachEvent("onmousemove",this._eventListener.mouseCollector),document.attachEvent("keypress",this._eventListener.keyboardCollector);else throw new sjcl.exception.bug("can't attach event");this._collectorsStarted=!0}},stopCollectors:function(){this._collectorsStarted&&(window.removeEventListener?(window.removeEventListener("load",this._eventListener.loadTimeCollector,!1),window.removeEventListener("mousemove",this._eventListener.mouseCollector,!1),window.removeEventListener("keypress",this._eventListener.keyboardCollector,
!1),window.removeEventListener("devicemotion",this._eventListener.accelerometerCollector,!1),window.removeEventListener("touchmove",this._eventListener.touchCollector,!1)):document.detachEvent&&(document.detachEvent("onload",this._eventListener.loadTimeCollector),document.detachEvent("onmousemove",this._eventListener.mouseCollector),document.detachEvent("keypress",this._eventListener.keyboardCollector)),this._collectorsStarted=!1)},addEventListener:function(a,b){this._callbacks[a][this._callbackI++]=
b},removeEventListener:function(a,b){var c,d,e=this._callbacks[a],f=[];for(d in e)e.hasOwnProperty(d)&&e[d]===b&&f.push(d);for(c=0;c<f.length;c++)d=f[c],delete e[d]},_bind:function(a){var b=this;return function(){a.apply(b,arguments)}},_gen4words:function(){for(var a=0;4>a&&(this._counter[a]=this._counter[a]+1|0,!this._counter[a]);a++);return this._cipher.encrypt(this._counter)},_gate:function(){this._key=this._gen4words().concat(this._gen4words());this._cipher=new sjcl.cipher.aes(this._key)},_reseed:function(a){this._key=
sjcl.hash.sha256.hash(this._key.concat(a));this._cipher=new sjcl.cipher.aes(this._key);for(a=0;4>a&&(this._counter[a]=this._counter[a]+1|0,!this._counter[a]);a++);},_reseedFromPools:function(a){var b=[],c=0,d;this._nextReseed=b[0]=(new Date).valueOf()+this._MILLISECONDS_PER_RESEED;for(d=0;16>d;d++)b.push(0x100000000*Math.random()|0);for(d=0;d<this._pools.length&&(b=b.concat(this._pools[d].finalize()),c+=this._poolEntropy[d],this._poolEntropy[d]=0,a||!(this._reseedCount&1<<d));d++);this._reseedCount>=
1<<this._pools.length&&(this._pools.push(new sjcl.hash.sha256),this._poolEntropy.push(0));this._poolStrength-=c;c>this._strength&&(this._strength=c);this._reseedCount++;this._reseed(b)},_keyboardCollector:function(){this._addCurrentTimeToEntropy(1)},_mouseCollector:function(a){var b,c;try{b=a.x||a.clientX||a.offsetX||0,c=a.y||a.clientY||a.offsetY||0}catch(d){c=b=0}0!=b&&0!=c&&this.addEntropy([b,c],2,"mouse");this._addCurrentTimeToEntropy(0)},_touchCollector:function(a){a=a.touches[0]||a.changedTouches[0];
this.addEntropy([a.pageX||a.clientX,a.pageY||a.clientY],1,"touch");this._addCurrentTimeToEntropy(0)},_loadTimeCollector:function(){this._addCurrentTimeToEntropy(2)},_addCurrentTimeToEntropy:function(a){"undefined"!==typeof window&&window.performance&&"function"===typeof window.performance.now?this.addEntropy(window.performance.now(),a,"loadtime"):this.addEntropy((new Date).valueOf(),a,"loadtime")},_accelerometerCollector:function(a){a=a.accelerationIncludingGravity.x||a.accelerationIncludingGravity.y||
a.accelerationIncludingGravity.z;if(window.orientation){var b=window.orientation;"number"===typeof b&&this.addEntropy(b,1,"accelerometer")}a&&this.addEntropy(a,2,"accelerometer");this._addCurrentTimeToEntropy(0)},_fireEvent:function(a,b){var c,d=sjcl.random._callbacks[a],e=[];for(c in d)d.hasOwnProperty(c)&&e.push(d[c]);for(c=0;c<e.length;c++)e[c](b)}};sjcl.random=new sjcl.prng(6);
(function(){try{var a,b,c,d;if(d="undefined"!==typeof module&&module.exports){var e;try{e=require("crypto")}catch(f){e=null}d=b=e}if(d&&b.randomBytes)a=b.randomBytes(128),a=new Uint32Array((new Uint8Array(a)).buffer),sjcl.random.addEntropy(a,1024,"crypto['randomBytes']");else if("undefined"!==typeof window&&"undefined"!==typeof Uint32Array){c=new Uint32Array(32);if(window.crypto&&window.crypto.getRandomValues)window.crypto.getRandomValues(c);else if(window.msCrypto&&window.msCrypto.getRandomValues)window.msCrypto.getRandomValues(c);
else return;sjcl.random.addEntropy(c,1024,"crypto['getRandomValues']")}}catch(f){"undefined"!==typeof window&&window.console&&(console.log("There was an error collecting entropy from the browser:"),console.log(f))}})();
sjcl.json={defaults:{v:1,iter:1E4,ks:128,ts:64,mode:"ccm",adata:"",cipher:"aes"},_encrypt:function(a,b,c,d){c=c||{};d=d||{};var e=sjcl.json,f=e._add({iv:sjcl.random.randomWords(4,0)},e.defaults),g;e._add(f,c);c=f.adata;"string"===typeof f.salt&&(f.salt=sjcl.codec.base64.toBits(f.salt));"string"===typeof f.iv&&(f.iv=sjcl.codec.base64.toBits(f.iv));if(!sjcl.mode[f.mode]||!sjcl.cipher[f.cipher]||"string"===typeof a&&100>=f.iter||64!==f.ts&&96!==f.ts&&128!==f.ts||128!==f.ks&&192!==f.ks&&0x100!==f.ks||2>
f.iv.length||4<f.iv.length)throw new sjcl.exception.invalid("json encrypt: invalid parameters");"string"===typeof a?(g=sjcl.misc.cachedPbkdf2(a,f),a=g.key.slice(0,f.ks/32),f.salt=g.salt):sjcl.ecc&&a instanceof sjcl.ecc.elGamal.publicKey&&(g=a.kem(),f.kemtag=g.tag,a=g.key.slice(0,f.ks/32));"string"===typeof b&&(b=sjcl.codec.utf8String.toBits(b));"string"===typeof c&&(f.adata=c=sjcl.codec.utf8String.toBits(c));g=new sjcl.cipher[f.cipher](a);e._add(d,f);d.key=a;f.ct="ccm"===f.mode&&sjcl.arrayBuffer&&
sjcl.arrayBuffer.ccm&&b instanceof ArrayBuffer?sjcl.arrayBuffer.ccm.encrypt(g,b,f.iv,c,f.ts):sjcl.mode[f.mode].encrypt(g,b,f.iv,c,f.ts);return f},encrypt:function(a,b,c,d){var e=sjcl.json,f=e._encrypt.apply(e,arguments);return e.encode(f)},_decrypt:function(a,b,c,d){c=c||{};d=d||{};var e=sjcl.json;b=e._add(e._add(e._add({},e.defaults),b),c,!0);var f,g;f=b.adata;"string"===typeof b.salt&&(b.salt=sjcl.codec.base64.toBits(b.salt));"string"===typeof b.iv&&(b.iv=sjcl.codec.base64.toBits(b.iv));if(!sjcl.mode[b.mode]||
!sjcl.cipher[b.cipher]||"string"===typeof a&&100>=b.iter||64!==b.ts&&96!==b.ts&&128!==b.ts||128!==b.ks&&192!==b.ks&&0x100!==b.ks||!b.iv||2>b.iv.length||4<b.iv.length)throw new sjcl.exception.invalid("json decrypt: invalid parameters");"string"===typeof a?(g=sjcl.misc.cachedPbkdf2(a,b),a=g.key.slice(0,b.ks/32),b.salt=g.salt):sjcl.ecc&&a instanceof sjcl.ecc.elGamal.secretKey&&(a=a.unkem(sjcl.codec.base64.toBits(b.kemtag)).slice(0,b.ks/32));"string"===typeof f&&(f=sjcl.codec.utf8String.toBits(f));g=new sjcl.cipher[b.cipher](a);
f="ccm"===b.mode&&sjcl.arrayBuffer&&sjcl.arrayBuffer.ccm&&b.ct instanceof ArrayBuffer?sjcl.arrayBuffer.ccm.decrypt(g,b.ct,b.iv,b.tag,f,b.ts):sjcl.mode[b.mode].decrypt(g,b.ct,b.iv,f,b.ts);e._add(d,b);d.key=a;return 1===c.raw?f:sjcl.codec.utf8String.fromBits(f)},decrypt:function(a,b,c,d){var e=sjcl.json;return e._decrypt(a,e.decode(b),c,d)},encode:function(a){var b,c="{",d="";for(b in a)if(a.hasOwnProperty(b)){if(!b.match(/^[a-z0-9]+$/i))throw new sjcl.exception.invalid("json encode: invalid property name");
c+=d+'"'+b+'":';d=",";switch(typeof a[b]){case "number":case "boolean":c+=a[b];break;case "string":c+='"'+escape(a[b])+'"';break;case "object":c+='"'+sjcl.codec.base64.fromBits(a[b],0)+'"';break;default:throw new sjcl.exception.bug("json encode: unsupported type");}}return c+"}"},decode:function(a){a=a.replace(/\s/g,"");if(!a.match(/^\{.*\}$/))throw new sjcl.exception.invalid("json decode: this isn't json!");a=a.replace(/^\{|\}$/g,"").split(/,/);var b={},c,d;for(c=0;c<a.length;c++){if(!(d=a[c].match(/^\s*(?:(["']?)([a-z][a-z0-9]*)\1)\s*:\s*(?:(-?\d+)|"([a-z0-9+\/%*_.@=\-]*)"|(true|false))$/i)))throw new sjcl.exception.invalid("json decode: this isn't json!");
null!=d[3]?b[d[2]]=parseInt(d[3],10):null!=d[4]?b[d[2]]=d[2].match(/^(ct|adata|salt|iv)$/)?sjcl.codec.base64.toBits(d[4]):unescape(d[4]):null!=d[5]&&(b[d[2]]="true"===d[5])}return b},_add:function(a,b,c){void 0===a&&(a={});if(void 0===b)return a;for(var d in b)if(b.hasOwnProperty(d)){if(c&&void 0!==a[d]&&a[d]!==b[d])throw new sjcl.exception.invalid("required parameter overridden");a[d]=b[d]}return a},_subtract:function(a,b){var c={},d;for(d in a)a.hasOwnProperty(d)&&a[d]!==b[d]&&(c[d]=a[d]);return c},
_filter:function(a,b){var c={},d;for(d=0;d<b.length;d++)void 0!==a[b[d]]&&(c[b[d]]=a[b[d]]);return c}};sjcl.encrypt=sjcl.json.encrypt;sjcl.decrypt=sjcl.json.decrypt;sjcl.misc._pbkdf2Cache={};sjcl.misc.cachedPbkdf2=function(a,b){var c=sjcl.misc._pbkdf2Cache,d;b=b||{};d=b.iter||1E3;c=c[a]=c[a]||{};d=c[d]=c[d]||{firstSalt:b.salt&&b.salt.length?b.salt.slice(0):sjcl.random.randomWords(2,0)};c=void 0===b.salt?d.firstSalt:b.salt;d[c]=d[c]||sjcl.misc.pbkdf2(a,c,b.iter);return{key:d[c].slice(0),salt:c.slice(0)}};
"undefined"!==typeof module&&module.exports&&(module.exports=sjcl);"function"===typeof define&&define([],function(){return sjcl});
var bigInt=function(undefined){"use strict";var BASE=1e7,LOG_BASE=7,MAX_INT=9007199254740992,MAX_INT_ARR=smallToArray(MAX_INT),DEFAULT_ALPHABET="0123456789abcdefghijklmnopqrstuvwxyz";var supportsNativeBigInt=typeof BigInt==="function";function Integer(v,radix,alphabet,caseSensitive){if(typeof v==="undefined")return Integer[0];if(typeof radix!=="undefined")return+radix===10&&!alphabet?parseValue(v):parseBase(v,radix,alphabet,caseSensitive);return parseValue(v)}function BigInteger(value,sign){this.value=value;this.sign=sign;this.isSmall=false}BigInteger.prototype=Object.create(Integer.prototype);function SmallInteger(value){this.value=value;this.sign=value<0;this.isSmall=true}SmallInteger.prototype=Object.create(Integer.prototype);function NativeBigInt(value){this.value=value}NativeBigInt.prototype=Object.create(Integer.prototype);function isPrecise(n){return-MAX_INT<n&&n<MAX_INT}function smallToArray(n){if(n<1e7)return[n];if(n<1e14)return[n%1e7,Math.floor(n/1e7)];return[n%1e7,Math.floor(n/1e7)%1e7,Math.floor(n/1e14)]}function arrayToSmall(arr){trim(arr);var length=arr.length;if(length<4&&compareAbs(arr,MAX_INT_ARR)<0){switch(length){case 0:return 0;case 1:return arr[0];case 2:return arr[0]+arr[1]*BASE;default:return arr[0]+(arr[1]+arr[2]*BASE)*BASE}}return arr}function trim(v){var i=v.length;while(v[--i]===0);v.length=i+1}function createArray(length){var x=new Array(length);var i=-1;while(++i<length){x[i]=0}return x}function truncate(n){if(n>0)return Math.floor(n);return Math.ceil(n)}function add(a,b){var l_a=a.length,l_b=b.length,r=new Array(l_a),carry=0,base=BASE,sum,i;for(i=0;i<l_b;i++){sum=a[i]+b[i]+carry;carry=sum>=base?1:0;r[i]=sum-carry*base}while(i<l_a){sum=a[i]+carry;carry=sum===base?1:0;r[i++]=sum-carry*base}if(carry>0)r.push(carry);return r}function addAny(a,b){if(a.length>=b.length)return add(a,b);return add(b,a)}function addSmall(a,carry){var l=a.length,r=new Array(l),base=BASE,sum,i;for(i=0;i<l;i++){sum=a[i]-base+carry;carry=Math.floor(sum/base);r[i]=sum-carry*base;carry+=1}while(carry>0){r[i++]=carry%base;carry=Math.floor(carry/base)}return r}BigInteger.prototype.add=function(v){var n=parseValue(v);if(this.sign!==n.sign){return this.subtract(n.negate())}var a=this.value,b=n.value;if(n.isSmall){return new BigInteger(addSmall(a,Math.abs(b)),this.sign)}return new BigInteger(addAny(a,b),this.sign)};BigInteger.prototype.plus=BigInteger.prototype.add;SmallInteger.prototype.add=function(v){var n=parseValue(v);var a=this.value;if(a<0!==n.sign){return this.subtract(n.negate())}var b=n.value;if(n.isSmall){if(isPrecise(a+b))return new SmallInteger(a+b);b=smallToArray(Math.abs(b))}return new BigInteger(addSmall(b,Math.abs(a)),a<0)};SmallInteger.prototype.plus=SmallInteger.prototype.add;NativeBigInt.prototype.add=function(v){return new NativeBigInt(this.value+parseValue(v).value)};NativeBigInt.prototype.plus=NativeBigInt.prototype.add;function subtract(a,b){var a_l=a.length,b_l=b.length,r=new Array(a_l),borrow=0,base=BASE,i,difference;for(i=0;i<b_l;i++){difference=a[i]-borrow-b[i];if(difference<0){difference+=base;borrow=1}else borrow=0;r[i]=difference}for(i=b_l;i<a_l;i++){difference=a[i]-borrow;if(difference<0)difference+=base;else{r[i++]=difference;break}r[i]=difference}for(;i<a_l;i++){r[i]=a[i]}trim(r);return r}function subtractAny(a,b,sign){var value;if(compareAbs(a,b)>=0){value=subtract(a,b)}else{value=subtract(b,a);sign=!sign}value=arrayToSmall(value);if(typeof value==="number"){if(sign)value=-value;return new SmallInteger(value)}return new BigInteger(value,sign)}function subtractSmall(a,b,sign){var l=a.length,r=new Array(l),carry=-b,base=BASE,i,difference;for(i=0;i<l;i++){difference=a[i]+carry;carry=Math.floor(difference/base);difference%=base;r[i]=difference<0?difference+base:difference}r=arrayToSmall(r);if(typeof r==="number"){if(sign)r=-r;return new SmallInteger(r)}return new BigInteger(r,sign)}BigInteger.prototype.subtract=function(v){var n=parseValue(v);if(this.sign!==n.sign){return this.add(n.negate())}var a=this.value,b=n.value;if(n.isSmall)return subtractSmall(a,Math.abs(b),this.sign);return subtractAny(a,b,this.sign)};BigInteger.prototype.minus=BigInteger.prototype.subtract;SmallInteger.prototype.subtract=function(v){var n=parseValue(v);var a=this.value;if(a<0!==n.sign){return this.add(n.negate())}var b=n.value;if(n.isSmall){return new SmallInteger(a-b)}return subtractSmall(b,Math.abs(a),a>=0)};SmallInteger.prototype.minus=SmallInteger.prototype.subtract;NativeBigInt.prototype.subtract=function(v){return new NativeBigInt(this.value-parseValue(v).value)};NativeBigInt.prototype.minus=NativeBigInt.prototype.subtract;BigInteger.prototype.negate=function(){return new BigInteger(this.value,!this.sign)};SmallInteger.prototype.negate=function(){var sign=this.sign;var small=new SmallInteger(-this.value);small.sign=!sign;return small};NativeBigInt.prototype.negate=function(){return new NativeBigInt(-this.value)};BigInteger.prototype.abs=function(){return new BigInteger(this.value,false)};SmallInteger.prototype.abs=function(){return new SmallInteger(Math.abs(this.value))};NativeBigInt.prototype.abs=function(){return new NativeBigInt(this.value>=0?this.value:-this.value)};function multiplyLong(a,b){var a_l=a.length,b_l=b.length,l=a_l+b_l,r=createArray(l),base=BASE,product,carry,i,a_i,b_j;for(i=0;i<a_l;++i){a_i=a[i];for(var j=0;j<b_l;++j){b_j=b[j];product=a_i*b_j+r[i+j];carry=Math.floor(product/base);r[i+j]=product-carry*base;r[i+j+1]+=carry}}trim(r);return r}function multiplySmall(a,b){var l=a.length,r=new Array(l),base=BASE,carry=0,product,i;for(i=0;i<l;i++){product=a[i]*b+carry;carry=Math.floor(product/base);r[i]=product-carry*base}while(carry>0){r[i++]=carry%base;carry=Math.floor(carry/base)}return r}function shiftLeft(x,n){var r=[];while(n-- >0)r.push(0);return r.concat(x)}function multiplyKaratsuba(x,y){var n=Math.max(x.length,y.length);if(n<=30)return multiplyLong(x,y);n=Math.ceil(n/2);var b=x.slice(n),a=x.slice(0,n),d=y.slice(n),c=y.slice(0,n);var ac=multiplyKaratsuba(a,c),bd=multiplyKaratsuba(b,d),abcd=multiplyKaratsuba(addAny(a,b),addAny(c,d));var product=addAny(addAny(ac,shiftLeft(subtract(subtract(abcd,ac),bd),n)),shiftLeft(bd,2*n));trim(product);return product}function useKaratsuba(l1,l2){return-.012*l1-.012*l2+15e-6*l1*l2>0}BigInteger.prototype.multiply=function(v){var n=parseValue(v),a=this.value,b=n.value,sign=this.sign!==n.sign,abs;if(n.isSmall){if(b===0)return Integer[0];if(b===1)return this;if(b===-1)return this.negate();abs=Math.abs(b);if(abs<BASE){return new BigInteger(multiplySmall(a,abs),sign)}b=smallToArray(abs)}if(useKaratsuba(a.length,b.length))return new BigInteger(multiplyKaratsuba(a,b),sign);return new BigInteger(multiplyLong(a,b),sign)};BigInteger.prototype.times=BigInteger.prototype.multiply;function multiplySmallAndArray(a,b,sign){if(a<BASE){return new BigInteger(multiplySmall(b,a),sign)}return new BigInteger(multiplyLong(b,smallToArray(a)),sign)}SmallInteger.prototype._multiplyBySmall=function(a){if(isPrecise(a.value*this.value)){return new SmallInteger(a.value*this.value)}return multiplySmallAndArray(Math.abs(a.value),smallToArray(Math.abs(this.value)),this.sign!==a.sign)};BigInteger.prototype._multiplyBySmall=function(a){if(a.value===0)return Integer[0];if(a.value===1)return this;if(a.value===-1)return this.negate();return multiplySmallAndArray(Math.abs(a.value),this.value,this.sign!==a.sign)};SmallInteger.prototype.multiply=function(v){return parseValue(v)._multiplyBySmall(this)};SmallInteger.prototype.times=SmallInteger.prototype.multiply;NativeBigInt.prototype.multiply=function(v){return new NativeBigInt(this.value*parseValue(v).value)};NativeBigInt.prototype.times=NativeBigInt.prototype.multiply;function square(a){var l=a.length,r=createArray(l+l),base=BASE,product,carry,i,a_i,a_j;for(i=0;i<l;i++){a_i=a[i];carry=0-a_i*a_i;for(var j=i;j<l;j++){a_j=a[j];product=2*(a_i*a_j)+r[i+j]+carry;carry=Math.floor(product/base);r[i+j]=product-carry*base}r[i+l]=carry}trim(r);return r}BigInteger.prototype.square=function(){return new BigInteger(square(this.value),false)};SmallInteger.prototype.square=function(){var value=this.value*this.value;if(isPrecise(value))return new SmallInteger(value);return new BigInteger(square(smallToArray(Math.abs(this.value))),false)};NativeBigInt.prototype.square=function(v){return new NativeBigInt(this.value*this.value)};function divMod1(a,b){var a_l=a.length,b_l=b.length,base=BASE,result=createArray(b.length),divisorMostSignificantDigit=b[b_l-1],lambda=Math.ceil(base/(2*divisorMostSignificantDigit)),remainder=multiplySmall(a,lambda),divisor=multiplySmall(b,lambda),quotientDigit,shift,carry,borrow,i,l,q;if(remainder.length<=a_l)remainder.push(0);divisor.push(0);divisorMostSignificantDigit=divisor[b_l-1];for(shift=a_l-b_l;shift>=0;shift--){quotientDigit=base-1;if(remainder[shift+b_l]!==divisorMostSignificantDigit){quotientDigit=Math.floor((remainder[shift+b_l]*base+remainder[shift+b_l-1])/divisorMostSignificantDigit)}carry=0;borrow=0;l=divisor.length;for(i=0;i<l;i++){carry+=quotientDigit*divisor[i];q=Math.floor(carry/base);borrow+=remainder[shift+i]-(carry-q*base);carry=q;if(borrow<0){remainder[shift+i]=borrow+base;borrow=-1}else{remainder[shift+i]=borrow;borrow=0}}while(borrow!==0){quotientDigit-=1;carry=0;for(i=0;i<l;i++){carry+=remainder[shift+i]-base+divisor[i];if(carry<0){remainder[shift+i]=carry+base;carry=0}else{remainder[shift+i]=carry;carry=1}}borrow+=carry}result[shift]=quotientDigit}remainder=divModSmall(remainder,lambda)[0];return[arrayToSmall(result),arrayToSmall(remainder)]}function divMod2(a,b){var a_l=a.length,b_l=b.length,result=[],part=[],base=BASE,guess,xlen,highx,highy,check;while(a_l){part.unshift(a[--a_l]);trim(part);if(compareAbs(part,b)<0){result.push(0);continue}xlen=part.length;highx=part[xlen-1]*base+part[xlen-2];highy=b[b_l-1]*base+b[b_l-2];if(xlen>b_l){highx=(highx+1)*base}guess=Math.ceil(highx/highy);do{check=multiplySmall(b,guess);if(compareAbs(check,part)<=0)break;guess--}while(guess);result.push(guess);part=subtract(part,check)}result.reverse();return[arrayToSmall(result),arrayToSmall(part)]}function divModSmall(value,lambda){var length=value.length,quotient=createArray(length),base=BASE,i,q,remainder,divisor;remainder=0;for(i=length-1;i>=0;--i){divisor=remainder*base+value[i];q=truncate(divisor/lambda);remainder=divisor-q*lambda;quotient[i]=q|0}return[quotient,remainder|0]}function divModAny(self,v){var value,n=parseValue(v);if(supportsNativeBigInt){return[new NativeBigInt(self.value/n.value),new NativeBigInt(self.value%n.value)]}var a=self.value,b=n.value;var quotient;if(b===0)throw new Error("Cannot divide by zero");if(self.isSmall){if(n.isSmall){return[new SmallInteger(truncate(a/b)),new SmallInteger(a%b)]}return[Integer[0],self]}if(n.isSmall){if(b===1)return[self,Integer[0]];if(b==-1)return[self.negate(),Integer[0]];var abs=Math.abs(b);if(abs<BASE){value=divModSmall(a,abs);quotient=arrayToSmall(value[0]);var remainder=value[1];if(self.sign)remainder=-remainder;if(typeof quotient==="number"){if(self.sign!==n.sign)quotient=-quotient;return[new SmallInteger(quotient),new SmallInteger(remainder)]}return[new BigInteger(quotient,self.sign!==n.sign),new SmallInteger(remainder)]}b=smallToArray(abs)}var comparison=compareAbs(a,b);if(comparison===-1)return[Integer[0],self];if(comparison===0)return[Integer[self.sign===n.sign?1:-1],Integer[0]];if(a.length+b.length<=200)value=divMod1(a,b);else value=divMod2(a,b);quotient=value[0];var qSign=self.sign!==n.sign,mod=value[1],mSign=self.sign;if(typeof quotient==="number"){if(qSign)quotient=-quotient;quotient=new SmallInteger(quotient)}else quotient=new BigInteger(quotient,qSign);if(typeof mod==="number"){if(mSign)mod=-mod;mod=new SmallInteger(mod)}else mod=new BigInteger(mod,mSign);return[quotient,mod]}BigInteger.prototype.divmod=function(v){var result=divModAny(this,v);return{quotient:result[0],remainder:result[1]}};NativeBigInt.prototype.divmod=SmallInteger.prototype.divmod=BigInteger.prototype.divmod;BigInteger.prototype.divide=function(v){return divModAny(this,v)[0]};NativeBigInt.prototype.over=NativeBigInt.prototype.divide=function(v){return new NativeBigInt(this.value/parseValue(v).value)};SmallInteger.prototype.over=SmallInteger.prototype.divide=BigInteger.prototype.over=BigInteger.prototype.divide;BigInteger.prototype.mod=function(v){return divModAny(this,v)[1]};NativeBigInt.prototype.mod=NativeBigInt.prototype.remainder=function(v){return new NativeBigInt(this.value%parseValue(v).value)};SmallInteger.prototype.remainder=SmallInteger.prototype.mod=BigInteger.prototype.remainder=BigInteger.prototype.mod;BigInteger.prototype.pow=function(v){var n=parseValue(v),a=this.value,b=n.value,value,x,y;if(b===0)return Integer[1];if(a===0)return Integer[0];if(a===1)return Integer[1];if(a===-1)return n.isEven()?Integer[1]:Integer[-1];if(n.sign){return Integer[0]}if(!n.isSmall)throw new Error("The exponent "+n.toString()+" is too large.");if(this.isSmall){if(isPrecise(value=Math.pow(a,b)))return new SmallInteger(truncate(value))}x=this;y=Integer[1];while(true){if(b&1===1){y=y.times(x);--b}if(b===0)break;b/=2;x=x.square()}return y};SmallInteger.prototype.pow=BigInteger.prototype.pow;NativeBigInt.prototype.pow=function(v){var n=parseValue(v);var a=this.value,b=n.value;var _0=BigInt(0),_1=BigInt(1),_2=BigInt(2);if(b===_0)return Integer[1];if(a===_0)return Integer[0];if(a===_1)return Integer[1];if(a===BigInt(-1))return n.isEven()?Integer[1]:Integer[-1];if(n.isNegative())return new NativeBigInt(_0);var x=this;var y=Integer[1];while(true){if((b&_1)===_1){y=y.times(x);--b}if(b===_0)break;b/=_2;x=x.square()}return y};BigInteger.prototype.modPow=function(exp,mod){exp=parseValue(exp);mod=parseValue(mod);if(mod.isZero())throw new Error("Cannot take modPow with modulus 0");var r=Integer[1],base=this.mod(mod);while(exp.isPositive()){if(base.isZero())return Integer[0];if(exp.isOdd())r=r.multiply(base).mod(mod);exp=exp.divide(2);base=base.square().mod(mod)}return r};NativeBigInt.prototype.modPow=SmallInteger.prototype.modPow=BigInteger.prototype.modPow;function compareAbs(a,b){if(a.length!==b.length){return a.length>b.length?1:-1}for(var i=a.length-1;i>=0;i--){if(a[i]!==b[i])return a[i]>b[i]?1:-1}return 0}BigInteger.prototype.compareAbs=function(v){var n=parseValue(v),a=this.value,b=n.value;if(n.isSmall)return 1;return compareAbs(a,b)};SmallInteger.prototype.compareAbs=function(v){var n=parseValue(v),a=Math.abs(this.value),b=n.value;if(n.isSmall){b=Math.abs(b);return a===b?0:a>b?1:-1}return-1};NativeBigInt.prototype.compareAbs=function(v){var a=this.value;var b=parseValue(v).value;a=a>=0?a:-a;b=b>=0?b:-b;return a===b?0:a>b?1:-1};BigInteger.prototype.compare=function(v){if(v===Infinity){return-1}if(v===-Infinity){return 1}var n=parseValue(v),a=this.value,b=n.value;if(this.sign!==n.sign){return n.sign?1:-1}if(n.isSmall){return this.sign?-1:1}return compareAbs(a,b)*(this.sign?-1:1)};BigInteger.prototype.compareTo=BigInteger.prototype.compare;SmallInteger.prototype.compare=function(v){if(v===Infinity){return-1}if(v===-Infinity){return 1}var n=parseValue(v),a=this.value,b=n.value;if(n.isSmall){return a==b?0:a>b?1:-1}if(a<0!==n.sign){return a<0?-1:1}return a<0?1:-1};SmallInteger.prototype.compareTo=SmallInteger.prototype.compare;NativeBigInt.prototype.compare=function(v){if(v===Infinity){return-1}if(v===-Infinity){return 1}var a=this.value;var b=parseValue(v).value;return a===b?0:a>b?1:-1};NativeBigInt.prototype.compareTo=NativeBigInt.prototype.compare;BigInteger.prototype.equals=function(v){return this.compare(v)===0};NativeBigInt.prototype.eq=NativeBigInt.prototype.equals=SmallInteger.prototype.eq=SmallInteger.prototype.equals=BigInteger.prototype.eq=BigInteger.prototype.equals;BigInteger.prototype.notEquals=function(v){return this.compare(v)!==0};NativeBigInt.prototype.neq=NativeBigInt.prototype.notEquals=SmallInteger.prototype.neq=SmallInteger.prototype.notEquals=BigInteger.prototype.neq=BigInteger.prototype.notEquals;BigInteger.prototype.greater=function(v){return this.compare(v)>0};NativeBigInt.prototype.gt=NativeBigInt.prototype.greater=SmallInteger.prototype.gt=SmallInteger.prototype.greater=BigInteger.prototype.gt=BigInteger.prototype.greater;BigInteger.prototype.lesser=function(v){return this.compare(v)<0};NativeBigInt.prototype.lt=NativeBigInt.prototype.lesser=SmallInteger.prototype.lt=SmallInteger.prototype.lesser=BigInteger.prototype.lt=BigInteger.prototype.lesser;BigInteger.prototype.greaterOrEquals=function(v){return this.compare(v)>=0};NativeBigInt.prototype.geq=NativeBigInt.prototype.greaterOrEquals=SmallInteger.prototype.geq=SmallInteger.prototype.greaterOrEquals=BigInteger.prototype.geq=BigInteger.prototype.greaterOrEquals;BigInteger.prototype.lesserOrEquals=function(v){return this.compare(v)<=0};NativeBigInt.prototype.leq=NativeBigInt.prototype.lesserOrEquals=SmallInteger.prototype.leq=SmallInteger.prototype.lesserOrEquals=BigInteger.prototype.leq=BigInteger.prototype.lesserOrEquals;BigInteger.prototype.isEven=function(){return(this.value[0]&1)===0};SmallInteger.prototype.isEven=function(){return(this.value&1)===0};NativeBigInt.prototype.isEven=function(){return(this.value&BigInt(1))===BigInt(0)};BigInteger.prototype.isOdd=function(){return(this.value[0]&1)===1};SmallInteger.prototype.isOdd=function(){return(this.value&1)===1};NativeBigInt.prototype.isOdd=function(){return(this.value&BigInt(1))===BigInt(1)};BigInteger.prototype.isPositive=function(){return!this.sign};SmallInteger.prototype.isPositive=function(){return this.value>0};NativeBigInt.prototype.isPositive=SmallInteger.prototype.isPositive;BigInteger.prototype.isNegative=function(){return this.sign};SmallInteger.prototype.isNegative=function(){return this.value<0};NativeBigInt.prototype.isNegative=SmallInteger.prototype.isNegative;BigInteger.prototype.isUnit=function(){return false};SmallInteger.prototype.isUnit=function(){return Math.abs(this.value)===1};NativeBigInt.prototype.isUnit=function(){return this.abs().value===BigInt(1)};BigInteger.prototype.isZero=function(){return false};SmallInteger.prototype.isZero=function(){return this.value===0};NativeBigInt.prototype.isZero=function(){return this.value===BigInt(0)};BigInteger.prototype.isDivisibleBy=function(v){var n=parseValue(v);if(n.isZero())return false;if(n.isUnit())return true;if(n.compareAbs(2)===0)return this.isEven();return this.mod(n).isZero()};NativeBigInt.prototype.isDivisibleBy=SmallInteger.prototype.isDivisibleBy=BigInteger.prototype.isDivisibleBy;function isBasicPrime(v){var n=v.abs();if(n.isUnit())return false;if(n.equals(2)||n.equals(3)||n.equals(5))return true;if(n.isEven()||n.isDivisibleBy(3)||n.isDivisibleBy(5))return false;if(n.lesser(49))return true}function millerRabinTest(n,a){var nPrev=n.prev(),b=nPrev,r=0,d,t,i,x;while(b.isEven())b=b.divide(2),r++;next:for(i=0;i<a.length;i++){if(n.lesser(a[i]))continue;x=bigInt(a[i]).modPow(b,n);if(x.isUnit()||x.equals(nPrev))continue;for(d=r-1;d!=0;d--){x=x.square().mod(n);if(x.isUnit())return false;if(x.equals(nPrev))continue next}return false}return true}BigInteger.prototype.isPrime=function(strict){var isPrime=isBasicPrime(this);if(isPrime!==undefined)return isPrime;var n=this.abs();var bits=n.bitLength();if(bits<=64)return millerRabinTest(n,[2,3,5,7,11,13,17,19,23,29,31,37]);var logN=Math.log(2)*bits.toJSNumber();var t=Math.ceil(strict===true?2*Math.pow(logN,2):logN);for(var a=[],i=0;i<t;i++){a.push(bigInt(i+2))}return millerRabinTest(n,a)};NativeBigInt.prototype.isPrime=SmallInteger.prototype.isPrime=BigInteger.prototype.isPrime;BigInteger.prototype.isProbablePrime=function(iterations){var isPrime=isBasicPrime(this);if(isPrime!==undefined)return isPrime;var n=this.abs();var t=iterations===undefined?5:iterations;for(var a=[],i=0;i<t;i++){a.push(bigInt.randBetween(2,n.minus(2)))}return millerRabinTest(n,a)};NativeBigInt.prototype.isProbablePrime=SmallInteger.prototype.isProbablePrime=BigInteger.prototype.isProbablePrime;BigInteger.prototype.modInv=function(n){var t=bigInt.zero,newT=bigInt.one,r=parseValue(n),newR=this.abs(),q,lastT,lastR;while(!newR.isZero()){q=r.divide(newR);lastT=t;lastR=r;t=newT;r=newR;newT=lastT.subtract(q.multiply(newT));newR=lastR.subtract(q.multiply(newR))}if(!r.isUnit())throw new Error(this.toString()+" and "+n.toString()+" are not co-prime");if(t.compare(0)===-1){t=t.add(n)}if(this.isNegative()){return t.negate()}return t};NativeBigInt.prototype.modInv=SmallInteger.prototype.modInv=BigInteger.prototype.modInv;BigInteger.prototype.next=function(){var value=this.value;if(this.sign){return subtractSmall(value,1,this.sign)}return new BigInteger(addSmall(value,1),this.sign)};SmallInteger.prototype.next=function(){var value=this.value;if(value+1<MAX_INT)return new SmallInteger(value+1);return new BigInteger(MAX_INT_ARR,false)};NativeBigInt.prototype.next=function(){return new NativeBigInt(this.value+BigInt(1))};BigInteger.prototype.prev=function(){var value=this.value;if(this.sign){return new BigInteger(addSmall(value,1),true)}return subtractSmall(value,1,this.sign)};SmallInteger.prototype.prev=function(){var value=this.value;if(value-1>-MAX_INT)return new SmallInteger(value-1);return new BigInteger(MAX_INT_ARR,true)};NativeBigInt.prototype.prev=function(){return new NativeBigInt(this.value-BigInt(1))};var powersOfTwo=[1];while(2*powersOfTwo[powersOfTwo.length-1]<=BASE)powersOfTwo.push(2*powersOfTwo[powersOfTwo.length-1]);var powers2Length=powersOfTwo.length,highestPower2=powersOfTwo[powers2Length-1];function shift_isSmall(n){return Math.abs(n)<=BASE}BigInteger.prototype.shiftLeft=function(v){var n=parseValue(v).toJSNumber();if(!shift_isSmall(n)){throw new Error(String(n)+" is too large for shifting.")}if(n<0)return this.shiftRight(-n);var result=this;if(result.isZero())return result;while(n>=powers2Length){result=result.multiply(highestPower2);n-=powers2Length-1}return result.multiply(powersOfTwo[n])};NativeBigInt.prototype.shiftLeft=SmallInteger.prototype.shiftLeft=BigInteger.prototype.shiftLeft;BigInteger.prototype.shiftRight=function(v){var remQuo;var n=parseValue(v).toJSNumber();if(!shift_isSmall(n)){throw new Error(String(n)+" is too large for shifting.")}if(n<0)return this.shiftLeft(-n);var result=this;while(n>=powers2Length){if(result.isZero()||result.isNegative()&&result.isUnit())return result;remQuo=divModAny(result,highestPower2);result=remQuo[1].isNegative()?remQuo[0].prev():remQuo[0];n-=powers2Length-1}remQuo=divModAny(result,powersOfTwo[n]);return remQuo[1].isNegative()?remQuo[0].prev():remQuo[0]};NativeBigInt.prototype.shiftRight=SmallInteger.prototype.shiftRight=BigInteger.prototype.shiftRight;function bitwise(x,y,fn){y=parseValue(y);var xSign=x.isNegative(),ySign=y.isNegative();var xRem=xSign?x.not():x,yRem=ySign?y.not():y;var xDigit=0,yDigit=0;var xDivMod=null,yDivMod=null;var result=[];while(!xRem.isZero()||!yRem.isZero()){xDivMod=divModAny(xRem,highestPower2);xDigit=xDivMod[1].toJSNumber();if(xSign){xDigit=highestPower2-1-xDigit}yDivMod=divModAny(yRem,highestPower2);yDigit=yDivMod[1].toJSNumber();if(ySign){yDigit=highestPower2-1-yDigit}xRem=xDivMod[0];yRem=yDivMod[0];result.push(fn(xDigit,yDigit))}var sum=fn(xSign?1:0,ySign?1:0)!==0?bigInt(-1):bigInt(0);for(var i=result.length-1;i>=0;i-=1){sum=sum.multiply(highestPower2).add(bigInt(result[i]))}return sum}BigInteger.prototype.not=function(){return this.negate().prev()};NativeBigInt.prototype.not=SmallInteger.prototype.not=BigInteger.prototype.not;BigInteger.prototype.and=function(n){return bitwise(this,n,function(a,b){return a&b})};NativeBigInt.prototype.and=SmallInteger.prototype.and=BigInteger.prototype.and;BigInteger.prototype.or=function(n){return bitwise(this,n,function(a,b){return a|b})};NativeBigInt.prototype.or=SmallInteger.prototype.or=BigInteger.prototype.or;BigInteger.prototype.xor=function(n){return bitwise(this,n,function(a,b){return a^b})};NativeBigInt.prototype.xor=SmallInteger.prototype.xor=BigInteger.prototype.xor;var LOBMASK_I=1<<30,LOBMASK_BI=(BASE&-BASE)*(BASE&-BASE)|LOBMASK_I;function roughLOB(n){var v=n.value,x=typeof v==="number"?v|LOBMASK_I:typeof v==="bigint"?v|BigInt(LOBMASK_I):v[0]+v[1]*BASE|LOBMASK_BI;return x&-x}function integerLogarithm(value,base){if(base.compareTo(value)<=0){var tmp=integerLogarithm(value,base.square(base));var p=tmp.p;var e=tmp.e;var t=p.multiply(base);return t.compareTo(value)<=0?{p:t,e:e*2+1}:{p:p,e:e*2}}return{p:bigInt(1),e:0}}BigInteger.prototype.bitLength=function(){var n=this;if(n.compareTo(bigInt(0))<0){n=n.negate().subtract(bigInt(1))}if(n.compareTo(bigInt(0))===0){return bigInt(0)}return bigInt(integerLogarithm(n,bigInt(2)).e).add(bigInt(1))};NativeBigInt.prototype.bitLength=SmallInteger.prototype.bitLength=BigInteger.prototype.bitLength;function max(a,b){a=parseValue(a);b=parseValue(b);return a.greater(b)?a:b}function min(a,b){a=parseValue(a);b=parseValue(b);return a.lesser(b)?a:b}function gcd(a,b){a=parseValue(a).abs();b=parseValue(b).abs();if(a.equals(b))return a;if(a.isZero())return b;if(b.isZero())return a;var c=Integer[1],d,t;while(a.isEven()&&b.isEven()){d=min(roughLOB(a),roughLOB(b));a=a.divide(d);b=b.divide(d);c=c.multiply(d)}while(a.isEven()){a=a.divide(roughLOB(a))}do{while(b.isEven()){b=b.divide(roughLOB(b))}if(a.greater(b)){t=b;b=a;a=t}b=b.subtract(a)}while(!b.isZero());return c.isUnit()?a:a.multiply(c)}function lcm(a,b){a=parseValue(a).abs();b=parseValue(b).abs();return a.divide(gcd(a,b)).multiply(b)}function randBetween(a,b){a=parseValue(a);b=parseValue(b);var low=min(a,b),high=max(a,b);var range=high.subtract(low).add(1);if(range.isSmall)return low.add(Math.floor(Math.random()*range));var digits=toBase(range,BASE).value;var result=[],restricted=true;for(var i=0;i<digits.length;i++){var top=restricted?digits[i]:BASE;var digit=truncate(Math.random()*top);result.push(digit);if(digit<top)restricted=false}return low.add(Integer.fromArray(result,BASE,false))}var parseBase=function(text,base,alphabet,caseSensitive){alphabet=alphabet||DEFAULT_ALPHABET;text=String(text);if(!caseSensitive){text=text.toLowerCase();alphabet=alphabet.toLowerCase()}var length=text.length;var i;var absBase=Math.abs(base);var alphabetValues={};for(i=0;i<alphabet.length;i++){alphabetValues[alphabet[i]]=i}for(i=0;i<length;i++){var c=text[i];if(c==="-")continue;if(c in alphabetValues){if(alphabetValues[c]>=absBase){if(c==="1"&&absBase===1)continue;throw new Error(c+" is not a valid digit in base "+base+".")}}}base=parseValue(base);var digits=[];var isNegative=text[0]==="-";for(i=isNegative?1:0;i<text.length;i++){var c=text[i];if(c in alphabetValues)digits.push(parseValue(alphabetValues[c]));else if(c==="<"){var start=i;do{i++}while(text[i]!==">"&&i<text.length);digits.push(parseValue(text.slice(start+1,i)))}else throw new Error(c+" is not a valid character")}return parseBaseFromArray(digits,base,isNegative)};function parseBaseFromArray(digits,base,isNegative){var val=Integer[0],pow=Integer[1],i;for(i=digits.length-1;i>=0;i--){val=val.add(digits[i].times(pow));pow=pow.times(base)}return isNegative?val.negate():val}function stringify(digit,alphabet){alphabet=alphabet||DEFAULT_ALPHABET;if(digit<alphabet.length){return alphabet[digit]}return"<"+digit+">"}function toBase(n,base){base=bigInt(base);if(base.isZero()){if(n.isZero())return{value:[0],isNegative:false};throw new Error("Cannot convert nonzero numbers to base 0.")}if(base.equals(-1)){if(n.isZero())return{value:[0],isNegative:false};if(n.isNegative())return{value:[].concat.apply([],Array.apply(null,Array(-n.toJSNumber())).map(Array.prototype.valueOf,[1,0])),isNegative:false};var arr=Array.apply(null,Array(n.toJSNumber()-1)).map(Array.prototype.valueOf,[0,1]);arr.unshift([1]);return{value:[].concat.apply([],arr),isNegative:false}}var neg=false;if(n.isNegative()&&base.isPositive()){neg=true;n=n.abs()}if(base.isUnit()){if(n.isZero())return{value:[0],isNegative:false};return{value:Array.apply(null,Array(n.toJSNumber())).map(Number.prototype.valueOf,1),isNegative:neg}}var out=[];var left=n,divmod;while(left.isNegative()||left.compareAbs(base)>=0){divmod=left.divmod(base);left=divmod.quotient;var digit=divmod.remainder;if(digit.isNegative()){digit=base.minus(digit).abs();left=left.next()}out.push(digit.toJSNumber())}out.push(left.toJSNumber());return{value:out.reverse(),isNegative:neg}}function toBaseString(n,base,alphabet){var arr=toBase(n,base);return(arr.isNegative?"-":"")+arr.value.map(function(x){return stringify(x,alphabet)}).join("")}BigInteger.prototype.toArray=function(radix){return toBase(this,radix)};SmallInteger.prototype.toArray=function(radix){return toBase(this,radix)};NativeBigInt.prototype.toArray=function(radix){return toBase(this,radix)};BigInteger.prototype.toString=function(radix,alphabet){if(radix===undefined)radix=10;if(radix!==10)return toBaseString(this,radix,alphabet);var v=this.value,l=v.length,str=String(v[--l]),zeros="0000000",digit;while(--l>=0){digit=String(v[l]);str+=zeros.slice(digit.length)+digit}var sign=this.sign?"-":"";return sign+str};SmallInteger.prototype.toString=function(radix,alphabet){if(radix===undefined)radix=10;if(radix!=10)return toBaseString(this,radix,alphabet);return String(this.value)};NativeBigInt.prototype.toString=SmallInteger.prototype.toString;NativeBigInt.prototype.toJSON=BigInteger.prototype.toJSON=SmallInteger.prototype.toJSON=function(){return this.toString()};BigInteger.prototype.valueOf=function(){return parseInt(this.toString(),10)};BigInteger.prototype.toJSNumber=BigInteger.prototype.valueOf;SmallInteger.prototype.valueOf=function(){return this.value};SmallInteger.prototype.toJSNumber=SmallInteger.prototype.valueOf;NativeBigInt.prototype.valueOf=NativeBigInt.prototype.toJSNumber=function(){return parseInt(this.toString(),10)};function parseStringValue(v){if(isPrecise(+v)){var x=+v;if(x===truncate(x))return supportsNativeBigInt?new NativeBigInt(BigInt(x)):new SmallInteger(x);throw new Error("Invalid integer: "+v)}var sign=v[0]==="-";if(sign)v=v.slice(1);var split=v.split(/e/i);if(split.length>2)throw new Error("Invalid integer: "+split.join("e"));if(split.length===2){var exp=split[1];if(exp[0]==="+")exp=exp.slice(1);exp=+exp;if(exp!==truncate(exp)||!isPrecise(exp))throw new Error("Invalid integer: "+exp+" is not a valid exponent.");var text=split[0];var decimalPlace=text.indexOf(".");if(decimalPlace>=0){exp-=text.length-decimalPlace-1;text=text.slice(0,decimalPlace)+text.slice(decimalPlace+1)}if(exp<0)throw new Error("Cannot include negative exponent part for integers");text+=new Array(exp+1).join("0");v=text}var isValid=/^([0-9][0-9]*)$/.test(v);if(!isValid)throw new Error("Invalid integer: "+v);if(supportsNativeBigInt){return new NativeBigInt(BigInt(sign?"-"+v:v))}var r=[],max=v.length,l=LOG_BASE,min=max-l;while(max>0){r.push(+v.slice(min,max));min-=l;if(min<0)min=0;max-=l}trim(r);return new BigInteger(r,sign)}function parseNumberValue(v){if(supportsNativeBigInt){return new NativeBigInt(BigInt(v))}if(isPrecise(v)){if(v!==truncate(v))throw new Error(v+" is not an integer.");return new SmallInteger(v)}return parseStringValue(v.toString())}function parseValue(v){if(typeof v==="number"){return parseNumberValue(v)}if(typeof v==="string"){return parseStringValue(v)}if(typeof v==="bigint"){return new NativeBigInt(v)}return v}for(var i=0;i<1e3;i++){Integer[i]=parseValue(i);if(i>0)Integer[-i]=parseValue(-i)}Integer.one=Integer[1];Integer.zero=Integer[0];Integer.minusOne=Integer[-1];Integer.max=max;Integer.min=min;Integer.gcd=gcd;Integer.lcm=lcm;Integer.isInstance=function(x){return x instanceof BigInteger||x instanceof SmallInteger||x instanceof NativeBigInt};Integer.randBetween=randBetween;Integer.fromArray=function(digits,base,isNegative){return parseBaseFromArray(digits.map(parseValue),parseValue(base||10),isNegative)};return Integer}();if(typeof module!=="undefined"&&module.hasOwnProperty("exports")){module.exports=bigInt}if(typeof define==="function"&&define.amd){define("big-integer",[],function(){return bigInt})}"use strict"

/**
 * The Lightnion Javascript client, top-level namespace.
 *
 * @namespace
 * @see lnn.open
 * @see lnn.stream.tcp
 * @see lnn.state
 * @example
 * lnn.open('proxy.server', 4990, function(endpoint)
 * {
 *     if (endpoint.state != lnn.state.success)
 *         return
 *     tcp = lnn.stream.tcp(endpoint, 'api.ipify.org', 80, handler)
 *     tcp.send('GET / HTTP/1.1\r\nHost: api.ipify.org\r\n\r\n')
 * })
 *
 * function handler(request)
 * {
 *     switch(request.state)
 *     {
 *         case lnn.state.created: console.log('ready')
 *             return
 *         case lnn.state.pending:
 *             console.log(lnn.enc.utf8(request.recv()))
 *             return
 *         case lnn.state.success: console.log('closed')
 *             return
 *     }
 * }
 *
 */
var lnn = {}

/**
 * Common API constants.
 * @namespace
 */
lnn.api = {}

/**
 * Supported API version.
 * @readonly
 * @default
 */
lnn.api.version = "0.1"

/**
 * Prefix used to craft API endpoints.
 * @default
 **/
lnn.api.url = "/lightnion/api/v0.1"

/**
 * Port used to craft websockets.
 * @default
 **/
lnn.api.ws_port = "8765"

/**
 * Request state enumeration.
 * @enum
 * @readonly
 **/
lnn.state = {
        /**
         * operation started
         * @type channel
         */
        started: 1,
        /**
         * /guard get success (channel only)
         * @type channel
         */
        guarded: 2,
        /**
         * circuit created
         * @type channel
         */
        created: 3,
        /**
         * circuit negotiation
         * @type channel
         */
        pending: 4,
        /** circuit extended (channel only)
         * @type channel
         */
        extpath: 5,
        /**
         * ready to use
         * @type channel
         */
        success: 6,
        /**
         * operation started
         * @type stream
         */
        started: 1,
        /**
         * ready to use
         * @type stream
         */
        created: 3,
        /**
         * incoming data
         * @type stream
         */
        pending: 4,
        /**
         * completed or closed
         * @type stream
         */
        success: 6
    }
/**
 * Create an empty endpoint object, consider using {@link lnn.open} first.
 *
 * @todo TODO: migrate from http+ws to https+wss
 * @todo TODO: use only one port for https+wss
 *
 * @param {string} host (ex: localhost, example.com)
 * @param {string} port (ex: 4990, 8080, 5000, 443…)
 * @return {endpoint_t}
 */
lnn.endpoint = function(host, port)
{
    var http = "http://" + host + ":" + port.toString()
    http += lnn.api.url

    var ws = "ws://" + host + ":" + lnn.api.ws_port
    ws += lnn.api.url

    /**
     * Internal object, stores API urls used for parent endpoint calls.
     *
     * <pre>
     * Note: {@link lnn.api.ws_port} is inlined in .ws and .socket
     *       (used by {@link lnn.io.socket}).
     * </pre>
     *
     * @interface endpoint_t~urls_t
     * @see endpoint_t
     *
     * @property {string} ws        websocket base url
     * @property {string} http      http calls base url
     * @property {string} guard     GET /consensus
     * @property {string} consensus GET /consensus
     * @property {string} socket    websocket endpoint
     * @property {string} channels  POST+DELETE /channels
     * @property {string} consensus GET /consensus
     */
    var urls = {
        ws: ws,
        http: http,
        guard: http + "/guard",
        socket: ws + "/channels",
        channels: http + "/channels",
        consensus: http + "/consensus",
        descriptors: http + "/descriptors",
        signing_keys: http + "/signing-keys"
    }

    /**
     * Captures the state of a channel, returned by {@link lnn.open}.
     *
     * @interface endpoint_t
     * @see lnn.endpoint
     *
     * @property {lnn.state} state              channel state
     * @property {io.io_t} io                   io adapter in use
     * @property {endpoint_t~urls_t} urls       static API urls in use
     * @property {backend_t} stream             stream backend in use
     * @property {backward_t} backward          backward cryptographic state
     * @property {forward_t} forward            forward cryptographic state
     * @property {material_t|half_t} material   shared cryptographic material
     * @property {null|half_t} auth             stores {@link lnn.auth}
     *                                          material
     * @property {Boolean} fast                 is {@link lnn.fast}
     *                                          in use?
     */
    var endpoint = {
        /**
         * Host in use, as given to {@link lnn.endpoint} factory.
         *
         * @name endpoint_t#host
         * @readonly
         */
        host: host,
        /**
         * Port in use, as given to {@link lnn.endpoint} factory.
         *
         * @name endpoint_t#port
         * @readonly
         */
        port: port,
        fast: null,
        auth: null,
        urls: urls,
        io: null,
        state: 0,
        /**
         * Last shared cryptographic material retrieved, written by:
         * <ul>
         *  <li> {@link lnn.post.create}
         *  <li> {@link lnn.post.extend}
         *  <li> {@link lnn.ntor.hand}
         *  <li> {@link lnn.ntor.fast}
         *  <li> {@link lnn.ntor.auth}
         * </ul>
         *
         * Either stores {@link material_t} or {@link half_t}.
         *
         * @name endpoint_t#material
         * @type {material_t|half_t}
         *
         * @see lnn.ntor.hand
         */
        material: null,
        forward: null,
        backward: null,
        /**
         * Identifier of the channel in used, written by successful a
         * {@link lnn.post.create} call.
         * @name endpoint_t#id
         * @readonly
         * @default null
         */
        id: null,
        /**
         * Polling url endpoint used for polling io requests.
         * @see lnn.post.channel
         * @see lnn.io.polling
         *
         * @name endpoint_t#url
         * @readonly
         * @default null
         */
        url: null,
        /**
         * Middle and Exit nodes descriptors obtained by {@link lnn.open}
         * during channel setup.
         *
         * <pre>
         * Note: writing this field will NOT change the path in use.
         * </pre>
         *
         * @name endpoint_t#path
         * @readonly
         * @default null
         */
        path: null,
        /**
         * Guard descriptor obtained by {@link lnn.open} during channel
         * setup, written by {@link lnn.get.guard}.
         *
         * @name endpoint_t#guard
         * @readonly
         * @default null
         */
        guard: null,
        stream: null,
        /**
         * Consensus obtained by {@link lnn.get.consensus} upon request.
         *
         * @name endpoint_t#consensus
         * @readonly
         * @default null
         */
        consensus: null,
        
        /**
         * Consensus obtained by {@link lnn.get.descriptors} upon request
         * @name endpoint_t#descriptors
         * @readonly
         * @default null
         */
        descriptors: null,
        consensus_raw: null,
        descriptors_raw: null,
        signing_keys: null,

        select_path: false,

        /*perform http get/post request*/
        
        http_request: function(url, method, data, data_type, success, error) 
        {   
            if (error === undefined)
                error = function() { }
            if (success === undefined)
                success = function() { }

           lnn.send_req(endpoint,url, method, data, data_type, success,error)
        },

        /*destroy the circuit*/
        close: function(success,error)
        {
            lnn.post.close(endpoint,success,error)
        }
    }

    return endpoint
}
/**
 * GET operations.
 * @namespace
 * @see lnn.get.guard
 */
lnn.get = {}

/**
 * Perform GET /guard and update endpoint accordingly,
 * see {@link endpoint_t#guard}.
 *
 * @param {endpoint_t} endpoint     endpoint in use, stores answer
 * @param {callback} success        optional, called on success
 * @param {callback} error          optional, called on error
 * @example
 * // Note: lnn.open perform these steps for you whenever needed.
 * endpoint = lnn.endpoint('localhost', 4990)
 * lnn.get.guard(endpoint, function (endpoint)
 * {
 *     console.log('Guard identity:', endpoint.guard.router.identity)
 * })
 * // (can also have error callback: function (endpoint, xhttp_status) { })
 */
lnn.get.guard = function(endpoint, success, error)
{
    fetch(endpoint.urls.guard, {
        method: 'GET'
    }).then(response => {
        if (response.status == 200) {
            response.json().then(data => {
                endpoint.guard = data
                if (success !== undefined)
                    success(endpoint)
            })
        } else if (error !== undefined) {
            error(endpoint, response.status)
        }
    })
}

/**
 * Perform GET /consensus and update endpoint accordingly,
 * see {@link endpoint_t#consensus}.
 *
 * <pre>
 * Note: provided for testing purposes and currently have no use.
 * </pre>
 *
 * Usage and parameters are similar to {@link lnn.get.guard}, stores the
 * consensus as parsed from the proxy-server answer.
 *
 * @param {endpoint_t} endpoint     endpoint in use, stores answer
 * @param {callback} success        optional, called on success
 * @param {callback} error          optional, called on error
 *
 * @see lnn.get.guard
 */
lnn.get.consensus = function(endpoint, success, error)
{
    fetch(endpoint.urls.consensus, {
        method: 'GET'
    }).then(response => {
        if (response.status == 200) {
            response.json().then(data => {
                endpoint.consensus = data
                if (success !== undefined)
                    success(endpoint)
                })
        } else if (error !== undefined) {
            error(endpoint, response.status)
        }
    })
}

/**
 * Perform GET /descriptors 
 */
lnn.get.descriptors = function(endpoint, success, error){
    fetch(endpoint.urls.descriptors, {
        method: 'GET'
    }).then(response => {
        if (response.status == 200) {
            response.json().then(data => {
                endpoint.descriptors = data
            
                if(success !== undefined) success(endpoint)    
            })
        } else if (error !== undefined) {
            error(endpoint, response.status)
        }
    })
}

lnn.get.consensus_raw = function(endpoint, success, error,flavor = 'microdesc')
{
    fetch(endpoint.urls.consensus+ "-raw/" + flavor, {
        method: 'GET'
    }).then(response => {
        if (response.status == 200) {
            response.text().then(data => {
                endpoint.consensus_raw =  data
                if (success !== undefined)
                    success(endpoint)
                })
        } else if (error !== undefined) {
            error(endpoint, response.status)
        }
    })
}

/**
 * Perform GET /descriptors 
 */
lnn.get.descriptors_raw = function(endpoint, success, error,flavor = 'microdesc'){
    fetch(endpoint.urls.descriptors+ "-raw/" + flavor, {
        method: 'GET'
    }).then(response => {
        if (response.status == 200) {
            response.text().then(data => {
                endpoint.descriptors_raw = data
            
                if(success !== undefined) success(endpoint)
            })
        } else if (error !== undefined) {
            error(endpoint, response.status)
        }
    })
}

lnn.get.signing_keys = function(endpoint, success, error){
    fetch(endpoint.urls.signing_keys, {
        method: 'GET'
    }).then(response => {
        if (response.status == 200) {
            response.json().then(data => {
                endpoint.signing_keys = data
            
                if(success !== undefined) success(endpoint)
            })
        } else if (error !== undefined) {
            error(endpoint, response.status)
        }
    })
}

/**
 * Cryptographic operations related to ntor handshakes.
 * @namespace
 * @see lnn.ntor.hand
 * @see lnn.ntor.shake
 */
lnn.ntor = {}

/**
 * Number of bytes to derive from successful ntor handshakes.
 * @readonly
 * @default
 */
lnn.ntor.keybytes = 92

/**
 * Protocol identifier, prefix tweaks used in ntor handshakes various hashes.
 * @readonly
 * @default
 *
 * @see lnn.ntor.tweaks
 */
lnn.ntor.protoid = "ntor-curve25519-sha256-1"

/**
 * Tweaks used in ntor handshakes for various hashes and key derivation.
 * @enum
 * @readonly
 *
 * @see lnn.ntor.hash
 */
lnn.ntor.tweaks = {
    /**
     * rfc5869 Expand {info}
     * @type kdf
     */
    expand: lnn.ntor.protoid + ":key_expand",
    /**
     * rfc5869 Extract {salt}
     * @type kdf
     */
    key: lnn.ntor.protoid + ":key_extract",
    /**
     * H({secret_input}, t_verify)
     * @type ntor
     */
    verify: lnn.ntor.protoid + ":verify",
    /**
     * suffix of {auth_input}
     * @type ntor
     */
    server: lnn.ntor.protoid + "Server",
    /**
     * H({auth_input}, t_mac)
     * @type ntor
     */
    mac: lnn.ntor.protoid + ":mac"}

/**
 * Tweaked pseudo-random function factory, see {@link lnn.ntor.hash}.
 *
 * @param {lnn.ntor.tweaks} tweak      tweak to use
 * @return {hash_t}
 *
 * @see lnn.ntor.hash
 */
lnn.ntor.hash_factory = function(tweak)
{
    tweak = lnn.ntor.tweaks[tweak]
    tweak = sjcl.codec.utf8String.toBits(tweak)

    /**
     * Tweaked pseudo-random function used by {@link lnn.ntor}, returned
     * by {@link lnn.ntor.hash_factory}.
     *
     * @interface hash_t
     * @see lnn.ntor.hash
     *
     * @property {Object} hmac      underlying hmac provider
     */
    var hash = {
        hmac: new sjcl.misc.hmac(tweak),
        /**
         * Compute parent tweaked pseudo-random function on provided data.
         *
         * @function
         * @name hash_t#encrypt
         * @param {Uint8Array} data     input data
         */
        encrypt: function(data)
        {
            data = lnn.enc.bits(data)
            data = hash.hmac.encrypt(data)
            return lnn.dec.bits(data)
        }}
    return hash
}

/**
 * Tweaked pseudo-random functions used in ntor handshakes.
 * @enum
 * @type hash_t
 *
 * @see lnn.ntor.tweaks
 */
lnn.ntor.hash = {
        /**
         * used for H({secret_input}, t_verify) during ntor handshakes
         */
        verify: lnn.ntor.hash_factory("verify"),
        /**
         * used for H({auth_input}, t_mac) during ntor handshakes
         */
        mac: lnn.ntor.hash_factory("mac"),
        /**
         * used for extraction during ntor handshakes key derivation
         */
        prk: lnn.ntor.hash_factory("key")
    }

/**
 * Compute ntor key derivation from given material to n bytes.
 *
 * @param {Uint8Array} material     ntor {secret_input} handshake
 * @param {int} n                   number of bytes to output
 * @return {Uint8Array}
 */
lnn.ntor.kdf = function(material, n)
{
    material = lnn.ntor.hash.prk.encrypt(material)
    var hash = new sjcl.misc.hmac(lnn.enc.bits(material))

    var tweak = lnn.ntor.tweaks["expand"]
    tweak = sjcl.codec.utf8String.toBits(tweak)

    var idx = 1
    var out = lnn.enc.bits([])
    var last = lnn.enc.bits([])
    while (sjcl.bitArray.bitLength(out) < n * 8)
    {
        var idxbits = lnn.enc.bits([idx])
        var current = sjcl.bitArray.concat(tweak, idxbits)

        last = hash.encrypt(sjcl.bitArray.concat(last, current))
        out = sjcl.bitArray.concat(out, last)
        idx = idx + 1
    }

    return lnn.dec.bits(sjcl.bitArray.clamp(out, n * 8))
}


/**
 * Compute the first part of a ntor handshake,
 * writes a {@link half_t} in {@link endpoint_t#material}.
 *
 * @param {endpoint_t} endpoint     state where to store half-finished material
 * @param {Object} descriptor       node descriptor to handshake with
 * @param {Boolean} encode          if true, returns base64 (default: true)
 * @return {Uint8Array|string}
 *
 * @see lnn.ntor.shake
 */
lnn.ntor.hand = function(endpoint, descriptor, encode)
{
    if (encode === undefined)
        encode = true
    if (descriptor === undefined)
        descriptor = endpoint.guard

    var identity = lnn.dec.base64(descriptor.router.identity + "=")
    var onionkey = lnn.dec.base64(descriptor["ntor-onion-key"])

    /**
    * Internal object, half-finished ntor handshake state in {@link
    * endpoint_t#material}, created by:
    * <ul>
    *   <li> {@link lnn.ntor.hand}
    *   <li> {@link lnn.ntor.fast}
    *   <li> {@link lnn.auth}
    * </ul>
    * Captures cryptographic state required to finish the handshake.
    *
    * @interface half_t
    *
    * @property {Object} ntor key pair
    * @property {Uint8Array} identity node identity
    * @property {Uint8Array} onionkey node public key
    */
    endpoint.material = {
            ntor: nacl.box.keyPair(),
            identity: identity,
            onionkey: onionkey
        }

    var pubkey = endpoint.material.ntor.publicKey
    var length = identity.length + onionkey.length + pubkey.length

    var payload = new Uint8Array(length)
    payload.set(identity, 0)
    payload.set(onionkey, identity.length)
    payload.set(pubkey, identity.length+onionkey.length)

    if (encode)
        return lnn.enc.base64(payload)
    return payload
}

/**
 * Just as {@link lnn.ntor.hand} but without node identity and onion key – used
 * by {@link lnn.fast}, writes a {@link half_t} in {@link endpoint_t#material}.
 *
 * <pre>Note: always returns base64-encoded handshake.</pre>
 *
 * @param {endpoint_t} endpoint     state where to store half-finished material
 * @return {string}
 *
 * @see lnn.fast
 */
lnn.ntor.fast = function(endpoint)
{
    endpoint.material = {}
    endpoint.material.ntor = nacl.box.keyPair()
    endpoint.material.identity = null
    endpoint.material.onionkey = null
    return lnn.enc.base64(endpoint.material.ntor.publicKey)
}

/**
 * Compute the second part of a ntor handshake read
 * from {@link endpoint_t#material}, returns derived bytes suitable as
 * {@link lnn.ntor.slice} input.
 *
 * <pre>Note: returns null if handshake is invalid.</pre>
 *
 * @param {endpoint_t} endpoint     state where to read half-finished material
 * @param {Uint8Array|string} data  server part of the handshake
 * @param {boolean} encoded         if true, decode data as base64
 *                                  (default: true)
 * @return {Uint8Array|null}
 *
 * @see lnn.ntor.hand
 */
lnn.ntor.shake = function(endpoint, data, encoded)
{
    if (encoded === undefined)
        encoded = true
    if (encoded)
        data = lnn.dec.base64(data)

    var client_pubkey = endpoint.material.ntor.publicKey
    var client_secret = endpoint.material.ntor.secretKey
    var server_pubkey = data.slice(0, nacl.scalarMult.scalarLength)
    var server_auth = data.slice(nacl.scalarMult.scalarLength)

    var identity = endpoint.material.identity
    var onionkey = endpoint.material.onionkey

    var exp_share = nacl.scalarMult(client_secret, server_pubkey)
    var exp_onion = nacl.scalarMult(client_secret, onionkey)

    var protoid = lnn.dec.utf8(lnn.ntor.protoid)
    var length = exp_share.length * 2 + identity.length + onionkey.length * 3
    var off = 0

    var secret_input = new Uint8Array(length + protoid.length)
    secret_input.set(exp_share, off); off += exp_share.length
    secret_input.set(exp_onion, off); off += exp_onion.length
    secret_input.set(identity, off); off += identity.length
    secret_input.set(onionkey, off); off += onionkey.length
    secret_input.set(client_pubkey, off); off += client_pubkey.length
    secret_input.set(server_pubkey, off); off += server_pubkey.length
    secret_input.set(protoid, off)
    var verify = lnn.ntor.hash.verify.encrypt(secret_input)

    var server = lnn.dec.utf8(lnn.ntor.tweaks["server"])
    var length = verify.length + identity.length + onionkey.length * 3
    var off = 0

    var auth_input = new Uint8Array(length + server.length)
    auth_input.set(verify, off); off += verify.length
    auth_input.set(identity, off); off += identity.length
    auth_input.set(onionkey, off); off += onionkey.length
    auth_input.set(server_pubkey, off); off += server_pubkey.length
    auth_input.set(client_pubkey, off); off += client_pubkey.length
    auth_input.set(server, off)
    var client_auth = lnn.ntor.hash.mac.encrypt(auth_input)

    var valid = true
    length = client_auth.length
    for (var i = 0; i < length; i++)
    {
        if (client_auth[i] != server_auth[i])
            valid = false
    }

    var zero_onion = 0
    var zero_share = 0
    length = exp_onion.length
    for (var i = 0; i < length; i++)
    {
        if (exp_onion[i] == 0)
            zero_onion = zero_onion + 1
        if (exp_share[i] == 0)
            zero_share = zero_share + 1
    }

    if (zero_onion == exp_onion.length || zero_share == exp_share.length)
        valid = false

    if (valid)
    {
        return lnn.ntor.kdf(secret_input, lnn.ntor.keybytes)
    }
    return null
}

/**
 * Build a shared cryptographic {@link material_t} for
 * {@link endpoint_t#material} from the output of {@link lnn.ntor.shake}.
 *
 * <pre>
 * Note: assume KEY_LEN == 16 (aes256) and HASH_LEN == 20 (sha1) internally.
 * </pre>
 *
 * @param {Uint8Array} material     exactly {@link lnn.ntor.keybytes}
 *                                  bytes
 * @return {material_t}
 */
lnn.ntor.slice = function(material)
{
    var k = 16 // KEY_LEN
    var h = 20 // HASH_LEN

    /**
     * Internal object, stores shared cryptographic material
     * as {@link endpoint_t#material}, returned by {@link lnn.ntor.slice}.
     *
     * @interface material_t
     * @see lnn.ntor.slice
     *
     * @property {Uint8Array} key_hash          unused
     * @property {Uint8Array} forward_key       used in {@link forward_t}
     * @property {Uint8Array} forward_digest    used in {@link forward_t}
     * @property {Uint8Array} backward_key      used in {@link backward_t}
     * @property {Uint8Array} backward_digest   used in {@link backward_t}
     */
    var material = {
        key_hash: material.slice(h * 2 + k * 2),
        forward_digest: material.slice(0, h),
        backward_digest: material.slice(h, h * 2),
        forward_key: material.slice(h * 2, h * 2 + k),
        backward_key: material.slice(h * 2 + k, h * 2 + k * 2)
    }
    return material
}

// (function only used for proxy auth, not a part of regular ntor handshake)

/**
 * <pre>
 * Note: this function is used for proxy-server authentication and is not a
 * part of regular ntor handshakes nor the Tor specification.
 * </pre>
 *
 * Take an endpoint that uses the proxy-server authentication API (such as one
 * configured through {@link lnn.auth}) and the base64-encoded fields "auth"
 * and "data" as returned by the proxy-server, then returns the decoded data
 * if and only if the authentication succeeded.
 *
 */
lnn.ntor.auth = function(endpoint, client, data)
{
    var pending_material = endpoint.material
    endpoint.material = endpoint.auth

    var data = lnn.dec.base64(data)
    var material = lnn.ntor.shake(endpoint, client)
    if (material == null)
        throw "Invalid auth."
    endpoint.material = pending_material

    var key = material.slice(0, 32)
    var nonce = material.slice(32, 32+24)
    data = nacl.secretbox.open(data, nonce, key)
    return JSON.parse(lnn.enc.utf8(data))
}
lnn.relay = {}
lnn.relay.payload_len = 509
lnn.relay.data_len = lnn.relay.payload_len - 11
lnn.relay.full_len = 5 + lnn.relay.payload_len
lnn.relay.cmd = {
        "begin"     : 1,   1: "begin",
        "data"      : 2,   2: "data",
        "end"       : 3,   3: "end",
        "connected" : 4,   4: "connected",
        "sendme"    : 5,   5: "sendme",
        "extend"    : 6,   6: "extend",
        "extended"  : 7,   7: "extended",
        "truncate"  : 8,   8: "truncate",
        "truncated" : 9,   9: "truncated",
        "drop"      : 10, 10: "drop",
        "resolve"   : 11, 11: "resolve",
        "resolved"  : 12, 12: "resolved",
        "begin_dir" : 13, 13: "begin_dir",
        "extend2"   : 14, 14: "extend2",
        "extended2" : 15, 15: "extended2"
    }

lnn.relay.pack = function(cmd, stream_id, data)
{
    if (data === undefined)
        data = new Uint8Array(0)
    if (stream_id === undefined)
        stream_id = 0

    if (typeof(data) == "string")
        data = lnn.dec.utf8(data)

    var cell = new Uint8Array(lnn.relay.full_len) /* padded with \x00 */
    var view = new DataView(cell.buffer)

    view.setUint32(0, 2147483648 /* fake circuit_id */, false)
    view.setUint8(4, 3 /* RELAY CELL */, false)
    view.setUint8(5, lnn.relay.cmd[cmd], false)
    view.setUint16(6, 0 /* recognized */, false)
    view.setUint16(8, stream_id, false)
    // (implicit 4-bytes zeroed digest at offset 10)
    view.setUint16(14, data.length, false)
    cell.set(data, 16)

    return cell
}

lnn.relay.extend = function(handshake, host, port, identity, eidentity)
{
    // (assuming that host is an IPv4)
    var addr = new Uint8Array(host.split("."))
    if (addr.join(".") != host)
        throw "Invalid extend IPv4 address, fatal."

    port = parseInt(port)
    if (typeof(identity) == "string")
        identity = lnn.dec.base64(identity)
    if (typeof(eidentity) == "string")
        eidentity = lnn.dec.base64(eidentity + "=")

    var nspec = 2
    if (eidentity !== undefined)
        nspec += 1

    var length = (1                     // Number of link specifiers
        + 1 + 1 + 6                         // 1. IPv4 addr+port
        + 1 + 1 + identity.length           // 2. Legacy identity
        + 2                             // Client handshake type (0x00002 ntor)
        + 2                             // Client handshake length
        + handshake.length)             // Actual handshake content

    if (nspec == 3)
        length += 1 + 1 + eidentity.length  // 3. Ed25519 identity

    var off = 0
    var data = new Uint8Array(length)
    var view = new DataView(data.buffer)
    view.setUint8(off, nspec /* nb of specifiers */, false); off += 1

    view.setUint8(off, 0 /* TLS-over-TCP IPv4 specifier */, false); off += 1
    view.setUint8(off, 6, false); off += 1      /* length   1 byte  */
    data.set(addr, off); off += 4        /* address  4 bytes */
    view.setUint16(off, port, false); off += 2  /* port     2 bytes */

    view.setUint8(off, 2 /* Legacy identity specifier */, false); off += 1
    view.setUint8(off, identity.length, false); off += 1
    data.set(identity, off); off += identity.length

    if (nspec == 3)
    {
        view.setUint8(off, 3 /* Ed25519 identity specifier */, false); off += 1
        view.setUint8(off, eidentity.length, false); off += 1
        data.set(eidentity, off); off += eidentity.length
    }

    view.setUint16(off, 2 /* handshake: 0x00002 ntor */, false); off += 2
    view.setUint16(off, handshake.length, false); off += 2
    data.set(handshake, off)

    return data
}

lnn.relay.begin = function(host, port)
{
    valid = false
    if (host.match("(\\d\+\\.){3}\\d\+"))
        valid = true
    if (host.match("^\\[[\\d:]*\\]$"))
        valid = true
    if (!valid && host.slice(-1) != ".")
        host = host + "."
    if (host.match("^([a-zA-Z0-9][a-zA-Z0-9\\-]*\\.)*$"))
        valid = true
    if (host.slice(-1) == ".")
        host = host.slice(0, -1)

    if (!valid)
        throw "Invalid host provided?"
    var address = lnn.dec.utf8(host + ":" + port)

    var data = new Uint8Array(address.length + 1 + 4) // (1o null, 4o flags)
    data.set(address, 0)
    data[address.length+1+3] = 5 // flags IPv6 okay+preferred and IPv4 okay

    return data
}
lnn.onion = {}
lnn.onion.ctr = function(key)
{
    var key = lnn.enc.bits(key)
    var aes = new sjcl.cipher.aes(key)

    var ctr = {
        prf: aes,
        nonce: 0,
        buffer: new Uint8Array(0),
        extend: function(n)
        {
            var length = (Math.floor(n / 16) + 1) * 16
            var remains = ctr.buffer
            ctr.buffer = new Uint8Array(length+remains.length)
            ctr.buffer.set(remains, 0)

            for (var idx = remains.length; idx < ctr.buffer.length; idx += 16)
            {
                var nonce = new Uint8Array(16)
                new DataView(nonce.buffer).setUint32(12, ctr.nonce, false)

                nonce = lnn.enc.bits(nonce)
                var pad = lnn.dec.bits(ctr.prf.encrypt(nonce))

                ctr.buffer.set(pad, idx)
                ctr.nonce = ctr.nonce + 1
            }
        },
        process: function(data)
        {
            if (data.length > ctr.buffer.length)
                ctr.extend(data.length)

            var data = data.slice(0)
            for (var idx = 0; idx < data.length; idx++)
            {
                data[idx] ^= ctr.buffer[idx]
            }
            ctr.buffer = ctr.buffer.slice(data.length)

            return data
        }
    }
    return ctr
}

lnn.onion.sha = function(digest)
{
    var digest = lnn.enc.bits(digest)

    var sha = {
        hash: new sjcl.hash.sha1(),
        digest: function(data)
        {
            sha.hash.update(lnn.enc.bits(data))
            data = new sjcl.hash.sha1(sha.hash).finalize()
            return lnn.dec.bits(data)
        }
    }

    sha.hash.update(digest)
    return sha
}

lnn.onion.forward = function(endpoint)
{
    var early = 8
    var layers = []
    if (endpoint.forward != null)
    {
        layers = endpoint.forward.layers
        layers.push(endpoint.forward)
        early = endpoint.forward.early
    }

    var forward = {
        iv: 0,
        ctr: lnn.onion.ctr(endpoint.material.forward_key),
        sha: lnn.onion.sha(endpoint.material.forward_digest),
        early: early, // (first 8 relay cells will be replaced by relay_early)
        layers: layers,
        encrypt: function(cell)
        {
            if ((cell.length) != lnn.relay.full_len)
                throw "Invalid size for cell, fatal."

            var body = cell.slice(5)
            for (var idx = 0; idx < forward.layers.length; idx++)
            {
                body.set(forward.layers[idx].ctr.process(body), 0)
            }
            cell.set(forward.ctr.process(body), 5)

            if (forward.early > 0 && cell[4] == 3 /* relay */)
            {
                forward.early = forward.early - 1
                cell[4] = 9 /* relay_early */
            }
            return cell
        },
        digest: function(cell)
        {
            if ((cell.length) != lnn.relay.full_len)
                throw "Invalid size for cell, fatal."

            var body = cell.slice(5)
            body.set(new Uint8Array(4), 5)
            return forward.sha.digest(body).slice(0, 4)
        }
    }
    return forward
}

lnn.onion.backward = function(endpoint)
{
    var layers = []
    if (endpoint.backward != null)
    {
        layers = endpoint.backward.layers
        layers.push(endpoint.backward)
    }

    var backward = {
        iv: 0,
        ctr: lnn.onion.ctr(endpoint.material.backward_key),
        sha: lnn.onion.sha(endpoint.material.backward_digest),
        layers: layers,
        decrypt: function(cell)
        {
            if ((cell.length) != lnn.relay.full_len)
                throw "Invalid size for cell, fatal."

            var body = cell.slice(5)
            
            for (var idx = 0; idx < backward.layers.length; idx++)
            {
                body.set(backward.layers[idx].ctr.process(body), 0)
                
                cell.set(body, 5)
            
                var recognized = cell.slice(6, 8)
                if (recognized[0] == recognized[1] && recognized[0] == 0)
                {
                    var digest = cell.slice(10, 14)
                    var expect = backward.layers[idx].digest(cell)

                    var length = new DataView(cell.slice(14, 16).buffer).getUint16(0, false)

                    if(expect[0] == digest[0] &&
                        expect[1] == digest[1] &&
                        expect[2] == digest[2] &&
                        expect[3] == digest[3] ) {
                        if (length <= lnn.relay.data_len)
                        {
                            console.log("Warning: Cell sent by intermediate \
                                tor node, after " + (idx+1) + " hop(s)")
                            return cell
                        }   
                    }
                }
            }
            
            cell.set(backward.ctr.process(body), 5)
            var digest = cell.slice(10, 14)
            cell.set(new Uint8Array(4), 10)

            var recognized = cell.slice(6, 8)
            if (!(recognized[0] == recognized[1] && recognized[0] == 0))
            {
                throw "Invalid cell recognized field."
            }

            var expect = backward.digest(cell)
            if (!(true
                && digest[0] == expect[0]
                && digest[1] == expect[1]
                && digest[2] == expect[2]
                && digest[3] == expect[3]))
            {
                throw "Invalid cell digest."
            }
            
            var length = new DataView(cell.slice(14, 16).buffer).getUint16(0, false)
            if (length > lnn.relay.data_len)
            {
                throw "Invalid cell data length."
            }

            return cell

            
        },
        digest: function(cell)
        {
            if ((cell.length) != lnn.relay.full_len)
                throw "Invalid size for cell, fatal."

            var body = cell.slice(5)
            body.set(new Uint8Array(4), 5)
            return backward.sha.digest(body).slice(0, 4)
        }
    }
    return backward
}

lnn.onion.build = function(endpoint, cmd, stream_id, data)
{
    var cell = lnn.relay.pack(cmd, stream_id, data)
    cell.set(endpoint.forward.digest(cell), 10)
    return endpoint.forward.encrypt(cell)
}

lnn.onion.peel = function(endpoint, cell)
{
    var cell = endpoint.backward.decrypt(cell)
    
    

    var length = new DataView(cell.slice(14, 16).buffer).getUint16(0, false)

    var id = new DataView(cell.slice(8, 10).buffer).getUint16(0, false)
    var cmd = lnn.relay.cmd[cell.slice(5, 6)[0]]
    var data = cell.slice(16, 16 + length)
    var relay = {cmd: cmd, stream_id: id, data: data}
    
    return relay
}
lnn.io = {}
lnn.io.polling = function(endpoint, handler, success, error)
{
    var io = {
        incoming: [],
        outcoming: [],
        pending: 0,
        handler: handler,
        success: success,
        error: error,
        cell: null,
        poll: function()
        {
            setTimeout(function()
            {
                lnn.post.channel(endpoint, io.poll)
            }, 100)
        },
        send: function(cell)
        {
            io.outcoming.push(lnn.enc.base64(cell))
        },
        recv: function()
        {
            if (io.incoming.length < 1)
                return undefined

            io.cell = io.incoming.shift()
            return lnn.dec.base64(io.cell)
        },
        start: function()
        {
            lnn.post.channel(endpoint, io.poll)
        }
    }
    endpoint.io = io
    return io
}

lnn.io.socket = function(endpoint, handler, success, error)
{
    if (handler === undefined)
        handler = function(endpoint) { }
    if (success === undefined)
        success = function(endpoint) { }
    if (error === undefined)
        error = function(endpoint) { }

    var io = {
        event: null,
        socket: null,
        closed: false,
        incoming: [],
        outcoming: [],
        handler: handler,
        success: success,
        error: error,
        cell: null,
	cell_recv: 0,
	//cell_sent: 0,
        send: function(cell)
        {
            io.outcoming.push(cell)

            //io.cell_sent += 1
            //var cell_repr = Array.from(cell.slice(0,20)).map(function(x) {return x.toString(16).padStart(2, '0')}).join('')
            //console.log("cell ", io.cell_sent.toString(), " sent to wbskt ", cell_repr)
        },
        recv: function()
        {
            if (io.incoming.length < 1)
                return undefined

            io.cell = io.incoming.shift()

            io.cell_recv += 1
            var cell_repr = Array.from(io.cell.slice(0,20)).map(function(x) {return x.toString(16).padStart(2, '0')}).join('')
            console.log("cell recv by wbskt ", cell_repr)

            return io.cell
        },
        start: function() { }
    }
    var socket;
    try {
        socket = new window._WebSocket(endpoint.urls.socket + "/" + endpoint.id)
    } catch (err) {
        socket = new WebSocket(endpoint.urls.socket + "/" + endpoint.id)
    }

    socket.binaryType = "arraybuffer"
    socket.onopen = function(event)
    {
        io.event = event
        io.success(endpoint)

        while (io.outcoming.length > 0)
            io.socket.send(io.outcoming.shift())

        io.send = function(cell)
        {
            if (io.closed)
                throw "Unable to send, connection closed."
            io.socket.send(cell.buffer)

            //io.cell_sent += 1
            //var cell_repr = Array.from(cell.slice(0,20)).map(function(x) {return x.toString(16).padStart(2, '0')}).join('')
            //console.log("cell ", io.cell_sent.toString(), " sent to wbskt ", cell_repr)
        }
    }
    socket.onerror = function(event)
    {
        io.event = event
        io.error(endpoint)
    }
    socket.onmessage = function(event)
    {
        io.event = event

	var data = new Uint8Array(event.data)

	var cell_repr = Array.from(data.slice(0,20)).map(function(x) {return x.toString(16).padStart(2, '0')}).join('')
	console.log("cell recv by wbskt ", cell_repr)

        // io.incoming.push(data)
	io.cell = data
        io.handler(endpoint, data)
    }
    socket.onclose = function(event)
    {
        io.event = event
        io.closed = true
        io.error(endpoint)
    }

    endpoint.io = io
    endpoint.io.socket = socket
    return io
}
lnn.post = {}
lnn.post.create = function(endpoint, success, error)
{
    var payload = null
    if (endpoint.fast)
        payload = lnn.ntor.fast(endpoint)
    else
        payload = lnn.ntor.hand(endpoint)

    payload = {ntor: payload}
    if (endpoint.auth != null)
    {
        payload["auth"] = lnn.enc.base64(endpoint.auth.ntor.publicKey)
    }
    payload = JSON.stringify(payload)

    fetch(endpoint.urls.channels, {
        method: 'POST',
        headers: new Headers({'content-type': 'application/json'}),
        body: payload
    }).then(response => {
        if (response.status == 201) {
            response.json().then(data => {

                var info = data
                if (endpoint.auth != null)
                {
                    info = lnn.ntor.auth(endpoint, info["auth"], info["data"])
                }
                endpoint.id = info["id"]
                endpoint.url = endpoint.urls.channels + "/" + info["id"]
                endpoint.path = info["path"]

                if (endpoint.fast)
                {
                    endpoint.guard = info["guard"]
                    endpoint.material.identity = lnn.dec.base64(
                        info["guard"].router.identity + "=")
                    endpoint.material.onionkey = lnn.dec.base64(
                        info["guard"]["ntor-onion-key"])
                }
    
                var material = lnn.ntor.shake(endpoint, info["ntor"])
                if (material == null)
                    throw "Invalid guard handshake."
    
                material = lnn.ntor.slice(material)
                endpoint.material = material
    
                endpoint.forward = lnn.onion.forward(endpoint)
                endpoint.backward = lnn.onion.backward(endpoint)
                if (success !== undefined)
                    success(endpoint)
    
            })
        } else if (error !== undefined) {
            error(endpoint, response.status)
        }
    })
}


lnn.post.circuit_info = function(endpoint, success, error, select_path, tcp_ports)
{
    if(select_path === undefined) {
        select_path = false
    }

    var payload = {}
    /**
    if (endpoint.fast)
        payload = lnn.ntor.fast(endpoint)
    else
        payload = lnn.ntor.hand(endpoint)

    payload = {ntor: payload}*/
    if (endpoint.auth != null)
    {
        payload["auth"] = lnn.enc.base64(endpoint.auth.ntor.publicKey)
    }
    payload["select_path"] = select_path.toString()
    payload = JSON.stringify(payload)

    fetch(endpoint.urls.channels, {
        method: 'POST',
        headers: new Headers({'content-type': 'application/json'}),
        body: payload
    }).then(response => {
        if (response.status == 201) {
            response.json().then(data => {
                var info = data
                if (endpoint.auth != null)
                {
                    info = lnn.ntor.auth(endpoint, info["auth"], info["data"])
                }

                endpoint.id = info["id"]
                endpoint.url = endpoint.urls.channels + "/" + info["id"]
                

                if (endpoint.fast)
                {
                    endpoint.guard = info["guard"]
                }

                if(!select_path)
                    endpoint.path = info["path"]
                else {
                    endpoint.consensus = lnn.consensusParser.parse(endpoint.consensus_raw)
                    endpoint.descriptors = lnn.parser.descriptors.parse(endpoint.descriptors_raw)
                    lnn.parser.descriptors.validate(endpoint.descriptors,endpoint.consensus)


                    endpoint.path = lnn.path.select_end_path(endpoint.consensus, endpoint.descriptors, endpoint.guard, true, tcp_ports)
                    console.log(endpoint.guard)
                    console.log(endpoint.path)
                }

                if (success !== undefined)
                    success(endpoint, info)
            })
        } else if (error !== undefined) {
            error(endpoint, response.status)
        }
    })
}

lnn.post.handshake = function(endpoint, info, success, error)
{
    //var handshake = info['handshake']
    var normal_handler = endpoint.io.handler

    var handler = function(endpoint, material)
    {
        endpoint.io.handler = normal_handler
        //var material = endpoint.io.recv()

        material = lnn.ntor.shake(endpoint, material.slice(7, 7+64), false)

        if (material == null)
            throw "Invalid guard handshake."


        material = lnn.ntor.slice(material)
        endpoint.material = material

        endpoint.forward = lnn.onion.forward(endpoint)
        endpoint.backward = lnn.onion.backward(endpoint)

        if (success !== undefined)
            success(endpoint)
    }

    endpoint.io.handler = handler
    
    var handshake = new Uint8Array(lnn.relay.full_len)
    var payload = lnn.ntor.hand(endpoint,endpoint.guard,false)


    var view = new DataView(handshake.buffer)
    view.setUint32(0, 2147483648 /* fake circuit_id */, false)
    view.setUint8(4, 10 /* CREATE2 CELL */, false)
    view.setUint16(5, 2 /* ntor handshake */, false)
    view.setUint16(7, payload.length, false)
    handshake.set(payload,9)


    endpoint.io.send(handshake)
}

lnn.post.channel = function(endpoint, success, error)
{
    endpoint.io.pending = endpoint.io.outcoming.length

    fetch(endpoint.url, {
        method: 'POST',
        headers: new Headers({'content-type': 'application/json'}),
        body: JSON.stringify({cells: endpoint.io.outcoming})
    }).then(response => {
        if (response.status == 201) {
            response.json().then(data => {
                var cells = data["cells"]
                if (cells === undefined)
                {
                    if (endpoint.io.error !== undefined)
                        endpoint.io.error(endpoint)
                    return
                }
    
                var pending = endpoint.io.pending
                if (pending > 0 && endpoint.io.success !== undefined)
                    endpoint.io.success(endpoint)
    
                if (cells.length > 0)
                {
                    endpoint.io.incoming = endpoint.io.incoming.concat(cells)
                    if (endpoint.io.handler !== undefined)
                        endpoint.io.handler(endpoint)
                }
    
                endpoint.io.outcoming = endpoint.io.outcoming.slice(pending)
                endpoint.io.pending = 0
    
                if (success !== undefined)
                    success(endpoint)
            })
        } else {
            if (endpoint.io.error !== undefined)
                endpoint.io.error(endpoint)

            if (error !== undefined)
                error(endpoint, rq.status)
        }
    })

}

lnn.post.extend = function(endpoint, descriptor, success, error)
{
    var hand = lnn.ntor.hand(endpoint, descriptor, false)

    var eidentity = descriptor["identity"]["master-key"] // (assuming ed25519)
    var identity = endpoint.material.identity
    var addr = descriptor["router"]["address"]
    var port = descriptor["router"]["orport"]

    var data = lnn.relay.extend(hand, addr, port, identity, eidentity)
    var cell = lnn.onion.build(endpoint, "extend2", 0, data)

    var extend_error = error
    var extend_success = success
    var normal_handler = endpoint.io.handler

    var handler = function(endpoint, data)
    {
        endpoint.io.handler = normal_handler

        var cell = lnn.onion.peel(endpoint, data)
        if (cell == null || cell.cmd != "extended2")
        {
            if (extend_error !== undefined)
                return extend_error(endpoint)
            throw "Invalid answer, expecting extended2 cell, fatal!"
        }

        var view = new DataView(cell.data.buffer)
        var length = view.getUint16(0, false)
        var data = cell.data.slice(2, 2+length)

        var material = lnn.ntor.shake(endpoint, data, false)
        material = lnn.ntor.slice(material)
        endpoint.material = material

        if (material == null && extend_error !== undefined)
            return extend_error(endpoint)

        endpoint.forward = lnn.onion.forward(endpoint)
        endpoint.backward = lnn.onion.backward(endpoint)

        if (extend_success !== undefined)
            extend_success(endpoint)
    }

    endpoint.io.handler = handler
    endpoint.io.send(cell)
}


lnn.post.close = function(endpoint, success, error)
{
    fetch(endpoint.url, {
        method: 'DELETE'
    }).then(response => {
        if (response.status == 202) {
            if (success !== undefined)
                success("Circuit closed")
        } else if (error !== undefined) {
            error("Error in closing circuit")
        }
    })
}

lnn.stream = {}
lnn.stream.entrancy = 0
lnn.stream.backend = function(error)
{
    var sendme = function(cell, endpoint)
    {
        if (cell.cmd == "sendme"){
            endpoint.stream.sendme += 1
            endpoint.stream.deliverywindow += 100
            //flush the send queue for the circuit

            while(endpoint.stream.deliverywindow > 0 && endpoint.stream.tosend.length > 0) {
                var cell = endpoint.stream.tosend.shift()
                endpoint.io.send(cell)
                endpoint.stream.deliverywindow -= 1
            }
        }
        else
        {
            error(endpoint)
            throw "Got unexpected control cell."
        }
    }

    var backend = {
        id: 0,
        tosend: [],
        sendme: 0,
        handles: {0: {callback: sendme}},
        packagewindow: 1000, // (circuit-level receiving window)
        deliverywindow: 1000,// circuit level sending window
        register: function(handle)
        {
            backend.id += 1
            handle.id = backend.id
            handle.packagewindow = 500 // (stream-level receiving window)
            handle.deliverywindow = 500// stream level sending window
            backend.handles[backend.id] = handle
            return backend.id
        },
        send: function(cell, endpoint)
        {
            if(backend.deliverywindow > 0) { //if we can send
                endpoint.io.send(cell)
                backend.deliverywindow -= 1 
            }
            else { ///add to the send queue, will be sent when "sendme" is received. 
                backend.tosend.push(cell)
            }
        }
    }
    return backend
}

lnn.stream.handler = function(endpoint, cell)
{
    lnn.stream.entrancy += 1
    if(lnn.stream.entrancy > 1) {
	console.log("ENTRANCY BUG")
    }

    if (cell[4] != 3) // (relay cell only)
    {
	console.log("Got non-relay cell, dropped: ", cell[4])
	lnn.stream.entrancy -= 1
	return
    }

    cell = lnn.onion.peel(endpoint, cell)
    if (cell == null)
    {
	console.log("Got invalid cell, dropped.")
	lnn.stream.entrancy -= 1
	return
    }

    if (!(cell.stream_id in endpoint.stream.handles))
    {
	console.log("Got cell outside stream, dropped: ", cell.stream_id)
	lnn.stream.entrancy -= 1
	return
    }

    var handle = endpoint.stream.handles[cell.stream_id]
    if (cell.cmd == "end")
	delete endpoint.stream.handles[cell.stream_id]

    handle.cell = cell
    handle.callback(cell, endpoint)

    /* handle circuit-level sendme */


    if(cell.cmd == "data") {
        endpoint.stream.packagewindow -= 1
    }
    console.log('Update window: ', endpoint.stream.packagewindow)
    if (endpoint.stream.packagewindow < 900)
    {
    	//console.log("Circuit window is ", endpoint.stream.packagewindow)
    	//console.log("Sending circuit level sendme cell now ", endpoint.io.counter)
    	endpoint.io.send(lnn.onion.build(endpoint, 'sendme'))
    	endpoint.stream.packagewindow += 100
    }

    /* handle stream-level sendme */
    if(cell.cmd == "data"){
        handle.packagewindow -= 1
    }
    if (handle.packagewindow < 450)
    {
        //console.log("Stream window is ", handle.packagewindow)
        //console.log("Sending stream level sendme cell now ", endpoint.io.counter)
        cell = lnn.onion.build(endpoint, 'sendme', handle.id)
        endpoint.io.send(cell)
        handle.packagewindow += 50
    }

    lnn.stream.entrancy -= 1
}

lnn.stream.raw = function(endpoint, handler)
{
    var request = {
        id: null,
        data: [],
        cell: null,
        send: function(cmd, data)
        {

            var cell = lnn.onion.build(
                request.endpoint, cmd, request.id, data)

            if(cmd != "data") {
                endpoint.io.send(cell) //non-data cells dont affect congestion control
                return
            }

            if(request.deliverywindow > 0) { //send if stream level window is non zero
                endpoint.stream.send(cell,endpoint) //send thru circuit level window.
                request.deliverywindow -= 1 
            }
            else {
                request.tosend.push(cell) //add to queue of stream level window
            }
        },
        recv: function()
        {
            var data = request.data
            request.data = []
            return data
        },
        state: lnn.state.started,
        packagewindow: null,
        deliverywindow: null,
        tosend: [],
        endpoint: endpoint,
        callback: function(cell)
        {
            if (cell.cmd == "connected")
                request.state = lnn.state.created
            if (cell.cmd == "end")
                request.state = lnn.state.success

            if(cell.cmd == "sendme") { //receive stream level sendme
                request.deliverywindow += 50
                while(request.deliverywindow > 0 && request.tosend.length > 0) {
                    var cell = request.tosend.shift()
                    endpoint.stream.send(cell,endpoint)
                    request.deliverywindow -= 1
                }
            }

            request.data.push(cell)
            handler(request)

            if (cell.cmd == "connected")
                request.state = lnn.state.pending
        }
    }

    var id = endpoint.stream.register(request)
    handler(request)
    return request
}

lnn.stream.dir = function(endpoint, path, handler)
{
    var request = {
        id: null,
        data: "",
        cell: null,
        send: function() { throw "No send method on directory streams." },
        recv: function()
        {
            var data = request.data
            request.data = ""
            return data
        },
        state: lnn.state.started,
        packagewindow: null,
        deliverywindow: null,
        tosend: [],
        endpoint: endpoint,
        callback: function(cell)
        {
            if (cell.cmd == "connected")
            {
                request.state = lnn.state.created
                handler(request)
                request.state = lnn.state.pending
            }
            if (cell.cmd == "end")
            {
                request.state = lnn.state.success
                handler(request)
            }
            if(cell.cmd == "sendme") {
                request.deliverywindow += 50
                while(request.deliverywindow > 0 && request.tosend.length > 0) {
                    var cell = request.tosend.shift()
                    endpoint.stream.send(cell,endpoint)
                    request.deliverywindow -= 1
                }
            }

            if (cell.cmd != "data")
                return

            request.data += lnn.enc.utf8(cell.data)
            handler(request)
        }
    }

    var id = endpoint.stream.register(request)
    var cell = lnn.onion.build(endpoint, "begin_dir", id)
    endpoint.io.send(cell)

    var data = "GET " + path + " HTTP/1.0\r\n"
    data += "Accept-Encoding: identity\r\n\r\n"
    data = lnn.dec.utf8(data)

    cell = lnn.onion.build(endpoint, "data", id, data)
    request.deliverywindow -= 1
    endpoint.stream.send(cell,endpoint)

    handler(request)
    return request
}

lnn.stream.tcp = function(endPoint, host, port, handler)
{
    var request = {
        id: null,
        data: new Uint8Array(0),
        cell: null,
        cache: [],
        send: function(send_data)
        {
            if(send_data !== undefined){ 
                request.cache.push(send_data)
            }

            if(request.state == lnn.state.started) { //not yet recvd reply for relay begin
                return
            }

            while(request.cache.length) {
                var data = request.cache.shift()
                
                if (typeof(data) == "string")
                    data = lnn.dec.utf8(data)

                var payload = new Uint8Array(lnn.relay.data_len)
                while (data.length > payload.length)
                {
                    payload.set(data.slice(0, payload.length), 0)
                    data = data.slice(payload.length)

                    var cell = lnn.onion.build(
                        request.endpoint, "data", request.id, payload)

                    if(request.deliverywindow > 0) {
                        request.endpoint.stream.send(cell,request.endpoint)
                        request.deliverywindow -= 1 
                    }
                    else {
                        request.tosend.push(cell)
                    }

                }
                var cell = lnn.onion.build(
                        request.endpoint, "data", request.id, data)

                if(request.deliverywindow > 0) {
                    request.endpoint.stream.send(cell,request.endpoint)
                    request.deliverywindow -= 1 
                }
                else {
                    request.tosend.push(cell)
                }
            }

        },
        recv: function()
        {
            var data = request.data
            request.data = new Uint8Array(0)
            return data
        },
        close: function()
        {
            var data = new Uint8Array(1)
            data[0] = 6 //reason  done.
            var cell = lnn.onion.build(request.endpoint,"end",request.id,data)
            request.endpoint.io.send(cell)
        },
        state: lnn.state.started,
        packagewindow: null,
        deliverywindow: null,
        tosend: [],
        endpoint: endPoint,
        retries: 0,
        callback: function(cell)
        {
            console.log(cell.cmd)
            if (cell.cmd == "connected"){
                request.state = lnn.state.created
                request.retries = 0
                request.send()
            }
            if (cell.cmd == "end"){
                if(cell.data[0] == 4) { //REASON EXIT_POLICY
                    if(request.retries == 3) { //threshold for retrying
                        console.log( 'Retries limit exceeded. Cant connect to host. ' )
                        request.state = lnn.state.success
                        request.retries = 0
                    }
                    else {
                        request.retries += 1
                        console.log("Retrying to build circuit, retry#: " + request.retries)

                        var ports = [80,443]
                        if(!ports.includes(port))
                            ports.push(port)

                        lnn.open(
                            request.endpoint.host,
                            request.endpoint.port,
                            request.success_on_open,
                            request.error_on_open,
                            undefined,
                            request.endpoint.fast,
                            request.endpoint.auth,
                            request.endpoint.select_path,
                            ports
                        )
                    }
                }
                else {
                    request.state = lnn.state.success
                }
            }
            if (cell.cmd == "data")
            {
                var data = request.data
                request.data = new Uint8Array(data.length + cell.data.length)
                request.data.set(data, 0)
                request.data.set(cell.data, data.length)
            }
            if(cell.cmd == "sendme") {

                request.deliverywindow += 50
                while(request.deliverywindow > 0 && request.tosend.length > 0) {
                    var cell = request.tosend.shift()
                    request.endpoint.stream.send(cell,request.endpoint)
                    request.deliverywindow -= 1
                }
            }


            handler(request)
            if (cell.cmd == "connected")
                request.state = lnn.state.pending
        },
        success_on_open: function(endp) {
            if(endp.consensus == null)
                endp.consensus = request.endpoint.consensus
            if(endp.descriptors == null)
                endp.descriptors = request.endpoint.descriptors
            if(endp.consensus_raw == null)
                endp.consensus_raw = request.endpoint.consensus_raw
            if(endp.descriptors_raw == null)
                endp.descriptors_raw = request.endpoint.descriptors_raw
            if(endp.signing_keys == null)
                endp.signing_keys = request.endpoint.signing_keys

            request.endpoint = endp

            var id = request.endpoint.stream.register(request)
            var data = lnn.relay.begin(host, port)
            var cell = lnn.onion.build(request.endpoint, "begin", id, data)
            request.endpoint.io.send(cell)

            handler(request)   
        },
        error_on_open: function(error_msg) {
            throw error_msg
        }
    }

    var id = endPoint.stream.register(request)

    var data = lnn.relay.begin(host, port)
    var cell = lnn.onion.build(endPoint, "begin", id, data)
    endPoint.io.send(cell)

    handler(request)
    return request
}
lnn.enc = {}
lnn.enc.bits = sjcl.codec.bytes.toBits
lnn.enc.utf8 = nacl.util.encodeUTF8
lnn.enc.base64 = nacl.util.encodeBase64
lnn.enc.bin = function(data)
{
    var str = ""
    for(var idx = 0; idx < data.length; idx++)
        str += String.fromCharCode(data[idx])
    return str
}

lnn.dec = {}
lnn.dec.bits = function(data)
{
    return new Uint8Array(sjcl.codec.bytes.fromBits(data))
}
lnn.dec.utf8 = nacl.util.decodeUTF8
lnn.dec.base64 = nacl.util.decodeBase64
lnn.dec.bin = function(str)
{
    var data = new Uint8Array(str.length)
    for(var idx = 0; idx < str.length; idx++)
        data[idx] = str.charCodeAt(idx)
    return data
}
lnn.fast = function(host, port, success, error, io, select_path)
{
    if(select_path === undefined) 
        select_path = true
    return lnn.open(host, port, success, error, io, true, null, select_path)
}

lnn.auth = function(host, port, suffix, success, error, io, select_path)
{
    if(select_path === undefined) 
        select_path = true
    if (typeof(suffix) == "string")
    {
        suffix = suffix.replace(/-/g, "+").replace(/_/g, "/")
        suffix = lnn.dec.base64(suffix)
    }
    if (lnn.enc.utf8(suffix.slice(0, 5)) != "auth ")
        throw "Invalid prefix in auth. suffix!"

    suffix = suffix.slice(5)
    if (suffix.length != 20 + 32)
        throw "Invalid auth. suffix length!"

    return lnn.open(host, port, success, error, io, true, {
        identity: suffix.slice(0, 20),
        onionkey: suffix.slice(20),
        ntor: nacl.box.keyPair()}, select_path)
}

lnn.open = function(host, port, success, error, io, fast, auth, select_path, tcp_ports)
{
    var endpoint = lnn.endpoint(host, port)
    if (io === undefined)
        io = lnn.io.socket
    if (fast === undefined)
        fast = false
    if (error === undefined)
        error = function() { }
    if (success === undefined)
        success = function() { }
    if(select_path === undefined) 
        select_path = true
    if(tcp_ports === undefined )
        tcp_ports = [80,443]

    endpoint.fast = fast
    endpoint.auth = auth
    endpoint.select_path = select_path

    var cb = {
        guard: function(endpoint)
        {
            endpoint.state = lnn.state.guarded
            

            lnn.post.circuit_info(endpoint, cb.startWebSocket, error, select_path, tcp_ports)
        },
	startWebSocket: function(endpoint, info) {
	    console.log('called startWebSocket cb')
            endpoint.stream = lnn.stream.backend(error)
            io(endpoint, lnn.stream.handler, function(endpoint)
            {
                var state = endpoint.state

                endpoint.state = lnn.state.pending
                
                endpoint.state = state
            }, error)
            endpoint.io.start()

            lnn.post.handshake(endpoint, info, cb.create, error)
	},
        create: function(endpoint)
        {
	    console.log('called create cb')
            endpoint.state = lnn.state.created
            

            lnn.post.extend(endpoint, endpoint.path[0], cb.extend, error)
        },
        extend: function(endpoint)
        {
	    console.log('called extend cb')
            endpoint.state = lnn.state.extpath
            

            lnn.post.extend(endpoint, endpoint.path[1], cb.success, error)
        },
        success: function(endpoint)
        {
	    console.log('called success cb')
            endpoint.state = lnn.state.success
            success(endpoint)
            endpoint.io.success = function() { }
        }
    }

    endpoint.state = lnn.state.started
    

    if(select_path) {
        lnn.get.consensus_raw(endpoint,function()
        {
            lnn.get.signing_keys(endpoint,function() 
            {
                if(!lnn.signature.verify(endpoint.consensus_raw,endpoint.signing_keys,0.5))
                {
                    throw "signature verification failed."
                }
                console.log("signature verification success")
                lnn.get.descriptors_raw(endpoint,function()
                {
                    if (endpoint.fast)
                        lnn.post.circuit_info(endpoint, cb.startWebSocket, error, select_path, tcp_ports)
                    else
                        lnn.get.guard(endpoint, cb.guard, error)

                },function()
                {
                    throw "Failed to fetch raw descriptors"
                })
            },function() 
            {
                throw "Failed to fetch signing keys"
            })    
        },function()
        {
            throw "Failed to fetch raw consensus!"
        })
    } 
    else 
    {
        // fast channel: one-request channel creation (no guard pinning)
        if (endpoint.fast)
            lnn.post.circuit_info(endpoint, cb.startWebSocket, error, select_path, tcp_ports)
        else
            lnn.get.guard(endpoint, cb.guard, error)
    }

    return endpoint
}


/***** high level apis ****/

lnn.agents = [
    "curl/7.61.0",
    "curl/7.60.0",
    "curl/7.59.0",
    "curl/7.58.0",
    "curl/7.57.0",
    "curl/7.56.1",
    "curl/7.56.0",
    "curl/7.55.1",
    "curl/7.55.0",
    "curl/7.54.1",
    "curl/7.54.0",
    "curl/7.53.1",
    "curl/7.53.0",
    "curl/7.52.1",
    "curl/7.52.0",
    "curl/7.51.0",
    "curl/7.50.3",
    "curl/7.50.2",
    "curl/7.50.1",
    "curl/7.50.0",
    "curl/7.50.0",
    "curl/7.49.1",
    "curl/7.49.0",
    "curl/7.48.0",
    "curl/7.47.1",
    "curl/7.47.0",
    "curl/7.46.0",
    "curl/7.45.0",
    "curl/7.44.0",
    "curl/7.43.0",
    "curl/7.42.1",
    "curl/7.42.0",
    "curl/7.41.0",
    "curl/7.40.0",
    "curl/7.39.0",
    "curl/7.38.0"
]

lnn.send_req = function(endpoint,url, method, data, data_type, success,error) {
    var agent = lnn.agents[Math.floor(Math.random() * lnn.agents.length)]

    var data_recv = ''
    var length = null
    var rawlen = 0
    var headers = null
    var handler = function(request) 
    {
        if(request.state == lnn.state.success) {
            error('Connection closed')
            return
        }

        if (request.state != lnn.state.pending)
            return

        var payload = request.recv()
        rawlen += payload.length
        data_recv += lnn.enc.utf8(payload)
        
        
        if (length == null)
        {
            if (data_recv.match('\r\n\r\n'))
            {
                headers = data_recv.split('\r\n\r\n')[0]
                var len = headers.match('Content-Length: ([^\r]*)')
                length = parseInt(len[1])
            }
        }
        
        if (headers == null || length == null || rawlen < headers.length + length)
            return

        request.close()
        console.log("Stream closed")

        success({headers: headers,
            data: data_recv.slice(headers.length + 4)})
        success = function(request) { }
    }

    if (url.slice(0, 7) == "http://")
        url = url.slice(7)
    else
    {
        error ('Urls must start with http://')
        return
    }

    var path = "/" + url.split("/").slice(1).join("/")
    var host = null
    if (url.match("/") == null)
        host = url
    else
        host = url.split("/", 1)[0]

    var port = "80"
    if (host.match(":") != null)
        port = host.split(":", 2)[1]

    if(method != "GET" && method != "POST") {
        error ('Unsupported method')
        return
    }

    if(data_type != "json" && data_type != "form") {
        error('Unsupported content type')
        return
    }

    if(data_type == "json") 
        data_type = "application/json"
    else
        data_type = "application/x-www-form-urlencoded"
    
    if(method == "GET" && data.length > 0) {
        data = "?" + data
        path += data
        path = encodeURI(path)
    }
    else if(data_type == "application/x-www-form-urlencoded"){
        data = encodeURI(data)
    }

    var payload = [
        [method, path, "HTTP/1.1"].join(" "),
        ["Host:", host].join(" "),
        ["User-Agent:", agent].join(" "),
        ["Accept:", "*/*"].join(" ")]

    if(method == "POST") {
        payload.push(["Content-Length:",data.length].join(" "))
        payload.push(["Content-Type:",data_type].join(" "))
        payload = payload.join("\r\n") + "\r\n\r\n" + data + "\r\n"
    } 
    else{
        payload = payload.join("\r\n") + "\r\n\r\n"
    }


    console.log(payload)

    host = host.split(':')[0]
    lnn.stream.tcp(endpoint, host, port, handler).send(payload)
}

lnn.http_request = function(url, method, data, data_type, success, error,tor_host,tor_port) 
{   
    if(tor_host === undefined) 
        tor_host = 'localhost'
    if(tor_port === undefined) 
        tor_port = 4990
    if (error === undefined)
        error = function() { }
    if (success === undefined)
        success = function() { }

    var closed = false

    var channel = lnn.open(
        tor_host,tor_port,function(endpoint)
        {
            if (endpoint.state != lnn.state.success) {
                return
            }
            
            lnn.send_req(endpoint,url, method, data, data_type,function(request) {
                //close circuit here.
                if(!closed) {
                    endpoint.close(function(success_msg) {console.log(success_msg)})
                    closed = true
                }
                success(request)
            },function(message) {
                //close circuit here
                if(!closed) {
                    endpoint.close(function(success_msg) {console.log(success_msg)})
                    closed = true
                }
                error(message)
            })

        }
        ,function() 
        {
            error("Connection establishment failed")
        }
    )
}


lnn.signature = {}

/**
 *  This function verifies the given raw consensus
 *
 *   Note 1: TOR does not perform a full PKCS#1 v1.5 signature (RFC 2313) as mentioned in the TOR's reference.
 *           The padding of the data that must be signed is done following the reference (see subsection 8.1 of the
 *           RFC 2313 for more details), however the digest is not wrapped into the data structure described in the
 *           subsection 10.1.2. This is the reason why RSA is performed manually.
 * 
 *   Note 2: <script src="http://peterolson.github.com/BigInteger.js/BigInteger.min.js"></script> must be included in the HTML file using this function.
 * 
 * @param {String} raw_cons the consensus we want to verify
 * @param {Object} keys object mapping the authorities' fingerprint to their key with the following format:
 *                  fingerprint:{
 *                       pem: key_pem            //the key in pem format
 *                       modulus: modulus        //the modulus of the key as a string
 *                       exponent: exponent      //the exponent of the key as a string
 *                   }
 * @param {Number} minimal the minimal percentage of the signatures that must be verified in order to verify the consensus
 * @returns {Boolean} the result of the verification
 */
lnn.signature.verify = function (raw_cons, keys, minimal, flavor = 'microdesc') {
    if (minimal === undefined) {
        minimal = 0.5
    } else if (minimal <= 0 || minimal > 1) {
        throw 'The minimal percentage must be between 0 (not included) and 1'
    }

    let nbr_verified = 0
    let total = 0

    //get the hash of the consensus
    let split_cons = raw_cons.split('directory-signature ')
    raw_cons = split_cons[0] + "directory-signature "

    let hash = (flavor == 'unflavored') ? sjcl.hash.sha1.hash(raw_cons) : sjcl.hash.sha256.hash(raw_cons)
    hash = sjcl.codec.hex.fromBits(hash)

    // Get the signatures and the signing keys
    let sig_and_keys_digests = lnn.signature.get_sig_and_keys_digests(split_cons.splice(1))

    for (let fingerprint in sig_and_keys_digests) {
        total++
        
        let key = keys[fingerprint]
        let e = bigInt(key["exponent"])
        let n = bigInt(key["modulus"])
        let key_digest = sig_and_keys_digests[fingerprint]["signing-key-digest"]

        if (key === undefined || !lnn.signature.verify_key(key["pem"], key_digest)) continue

        let signature = sig_and_keys_digests[fingerprint]["signature"]
        let sig_big_int = lnn.signature.get_signature_big_int(signature)
        let padded_hash = lnn.signature.get_hash(sig_big_int, e, n)
        let recovered_hash = lnn.signature.get_hash_from_rsa_cipher(padded_hash)

        nbr_verified = (recovered_hash === undefined || recovered_hash !== hash) ? nbr_verified : nbr_verified + 1
    }

    return nbr_verified > minimal * total
}

/**
 * This function get the digest encrypted by the RSA corresponding to given the exponent and modulus
 *
 * @param {BigInteger} signature the encrypted signature
 * @param {BigInteger} exponent the exponent of the key
 * @param {BigInteger} modulus the modulus of the key
 * @returns {String} the padded hash 
 */
lnn.signature.get_hash = function (signature, exponent, modulus) {
    let padded_hash = signature.modPow(exponent, modulus).toString(16)
    let size = modulus.toString(16).length
    let offset = size - padded_hash.length
    for (let i = 0; i < offset; i++) {
        padded_hash = "0" + padded_hash
    }
    return padded_hash
}

/**
 * This function verifies that the key corresponds to one that signed the consensus
 * 
 * @param {string} key the key with the format pem
 * @param {string} key_digest the hex digest extracted from the consensus
 */
lnn.signature.verify_key = function (key, key_digest) {
    let raw_key = key.split('\n')
    let b_index = raw_key.indexOf("-----BEGIN RSA PUBLIC KEY-----")
    let e_index = raw_key.indexOf("-----END RSA PUBLIC KEY-----")

    raw_key = raw_key.splice(b_index + 1, e_index - b_index - 1).join("")
    raw_key = sjcl.codec.base64.toBits(raw_key)
    let hash = sjcl.hash.sha1.hash(raw_key)
    hash = sjcl.codec.hex.fromBits(hash)
    return hash.toUpperCase() === key_digest.toUpperCase()
}


/**
 * This function gets the signatures and the signing key digests from the authority section of the consensus
 *
 * @param {Array} remaining the remaining part of the consensus after the split by "directory-signature "
 * @returns {object} the following mapping:
 *      fingerprint:{
 *          signature-key-digest
 *          signature
 *      }
 */
lnn.signature.get_sig_and_keys_digests = function (remaining) {
    let sign_and_digests = {}
    for (let r of remaining) {
        if (r !== '') {
            let split = r.split('\n')
            let b_index = split.indexOf("-----BEGIN SIGNATURE-----")
            let e_index = split.indexOf("-----END SIGNATURE-----")
            let sign = split.splice(b_index + 1, e_index - b_index - 1).join("")
            let digests = split[0].split(" ")

            let [fingerprint, key_hex_digest] = (digests.length == 2) ? digests : digests.splice(1)

            sign_and_digests[fingerprint] = {
                "signing-key-digest": key_hex_digest,
                "signature": sign
            }
        }
    }
    return sign_and_digests
}
/**
 * 
 * This function transforms a signature in base64 into a bigInteger
 * @param {string} signature the signature encoded in base64
 * @returns {BigInteger} the integer corresponding to the signature
 */
lnn.signature.get_signature_big_int = function (signature) {
    let sig_hex = sjcl.codec.hex.fromBits(sjcl.codec.base64.toBits(signature))
    let sig = bigInt(sig_hex, 16)
    return sig
}

/**
 * Verifies that the cipher has the required format and extract the substring corresponding to the hash of the consensus
 *
 * @param {string} cipher the padded hash of the consensus
 * @returns {string} the hash of the consensus
 */
lnn.signature.get_hash_from_rsa_cipher = function (padded_hash) {

    if (!padded_hash.startsWith("0001")) return undefined
    padded_hash = padded_hash.substring(4)
    let sep_index = padded_hash.indexOf("00")

    for (let i = 1; i < sep_index; i++) {
        if (padded_hash.charAt(i) !== "f") return undefined
    }

    return padded_hash.substring(sep_index + 2)
}
lnn.consensusParser = {} 
lnn.consensusParser.parse = function(rawText,flavor = 'microdesc') {
    if (typeof rawText !== 'string') throw `Error: the consensus must be given as a string`
    lnn.consensusParser.lines = rawText.split('\n')
    lnn.consensusParser.words = lnn.consensusParser.lines[0].split(' ')
    lnn.consensusParser.consensus = {}
    lnn.consensusParser.validFlags = ['Authority', 'BadExit', 'Exit', 'Fast', 'Guard', 'HSDir', 'NoEdConsensus', 'Stable', 'StaleDesc', 'Running', 'Valid', 'V2Dir']
    lnn.consensusParser.index = 0
    lnn.consensusParser.totalLines = lnn.consensusParser.lines.length

    if(flavor != 'unflavored' && flavor != 'microdesc') {
        throw 'Error: Unexpected flavor'
    }
    lnn.consensusParser.consensus['flavor'] = flavor

    lnn.consensusParser.consumeHeaders()
    lnn.consensusParser.consumeAuthority()
    lnn.consensusParser.consumeRouters()
    lnn.consensusParser.consumeFooter()

    return lnn.consensusParser.consensus
}

//----------------------------------HEADERS PARSER--------------------------------

/**
 * Function that parses the headers
 */
lnn.consensusParser.consumeHeaders = function() {
    lnn.consensusParser.consumeNetworkStatusVersion()
    lnn.consensusParser.consumeVoteStatus()
    lnn.consensusParser.consumeConsensusMethod()
    lnn.consensusParser.consumeDate('valid-after')
    lnn.consensusParser.consumeDate('fresh-until')
    lnn.consensusParser.consumeDate('valid-until')
    lnn.consensusParser.consumeVotingDelay()
    lnn.consensusParser.tryConsumeVersions('client-versions')
    lnn.consensusParser.tryConsumeVersions('server-versions')

    while (lnn.consensusParser.words[0] === 'package') {
        lnn.consensusParser.consumePackage()
    }

    lnn.consensusParser.consumeKnownFlags()
    lnn.consensusParser.tryConsumeProtocols('recommended-client-protocols')
    lnn.consensusParser.tryConsumeProtocols('recommended-relay-protocols')
    lnn.consensusParser.tryConsumeProtocols('required-client-protocols')
    lnn.consensusParser.tryConsumeProtocols('required-relay-protocols')
    lnn.consensusParser.tryConsumeParams()
    lnn.consensusParser.tryConsumeShareRand('shared-rand-previous-value')
    lnn.consensusParser.tryConsumeShareRand('shared-rand-current-value')

}

/**
 * Parse the field network-status-version
 */
lnn.consensusParser.consumeNetworkStatusVersion = function() {
    let expectedLength = 2
    if(lnn.consensusParser.consensus.flavor == 'microdesc') {
        expectedLength = 3
        if(lnn.consensusParser.words[2] != 'microdesc')
            throw 'Error: Flavor mismatch in header.'
    }

    let version = lnn.consensusParser.tryParseKeyValueInteger('network-status-version',expectedLength)
    lnn.consensusParser.consensus['headers'] = {
        'network-status-version': {
            'version': version,
            'flavor': lnn.consensusParser.consensus.flavor
        }
    }

    lnn.consensusParser.nextLine()
}

/**
 * Parse the field vote-status
 * @throws WrongParameterException if status is not consensus
 */
lnn.consensusParser.consumeVoteStatus = function() {
    let status = lnn.consensusParser.tryParseKeyValueString('vote-status')
    if (status !== 'consensus') throw `WrongParameterException: vote-status must be consensus`
    lnn.consensusParser.consensus['headers']['vote-status'] = status
    lnn.consensusParser.nextLine()
}

/**
 * Parse the field consensus-method
 */
lnn.consensusParser.consumeConsensusMethod = function() {
    lnn.consensusParser.consensus['headers']['consensus-method'] = lnn.consensusParser.tryParseKeyValueInteger('consensus-method')
    lnn.consensusParser.nextLine()
}

/**
 * Parse the fields valid-after, fresh-until and valid-until
 * @param {strin} word 
 */
lnn.consensusParser.consumeDate = function(word) {
    lnn.consensusParser.consensus['headers'][word] = lnn.consensusParser.tryParseDate(word)
    lnn.consensusParser.nextLine()
}

/**
 * Parse the field voting-delay
 * @throws NotEqualException if lnn.consensusParser.words[0] != word
 * @throws WrongParameterException if lnn.consensusParser.words[1] or lnn.consensusParser.words[2] is not a number
 * @throws WrongFormatException if lnn.consensusParser.words.length is not 3
 */
lnn.consensusParser.consumeVotingDelay = function() {
    lnn.consensusParser.checkFormat(3, 'voting-delay')
    if (isNaN(lnn.consensusParser.words[1])) throw `WrongParameterException: ${words[1]} is not a number`
    if (isNaN(lnn.consensusParser.words[2])) throw `WrongParameterException: ${words[2]} is not a number`

    lnn.consensusParser.consensus['headers']['voting-delay'] = {
        'vote': Number(lnn.consensusParser.words[1]),
        'dist': Number(lnn.consensusParser.words[2])
    }

    lnn.consensusParser.nextLine()
}

/**
 * Try to parse the fields client-versions or server-versions if they are present
 * @param {string} word either client-versions or server-versions
 */
lnn.consensusParser.tryConsumeVersions = function(word) {

    if (lnn.consensusParser.consensus['headers'][word] !== undefined) throw `AlreadyPresentException: ${word} can only appear once`
    if (lnn.consensusParser.words[0] === word) {
        lnn.consensusParser.consensus['headers'][word] = lnn.consensusParser.tryParseCommaSeparatedList(word)
        lnn.consensusParser.nextLine()
    }
}

/**
 * Parses the field package
 * @throws WrongFormatException if lnn.consensusParser.words.length is smaller than 5
 */
lnn.consensusParser.consumePackage = function() {

    if (lnn.consensusParser.words.length < 5) throw `WrongFormatException: at least 5 fields are expected`
    if (lnn.consensusParser.consensus['headers']['package'] === undefined) lnn.consensusParser.consensus['headers']['package'] = []

    let pack = {
        'name': lnn.consensusParser.words[1],
        'version': lnn.consensusParser.words[2],
        'url': lnn.consensusParser.words[3]
    }
    let remaining = lnn.consensusParser.words.splice(4, lnn.consensusParser.words.length)
    let digests = {}

    for (let digest of remaining) {
        let tmp = digest.split('=')
        digests[tmp[0]] = tmp[1]
    }

    pack['digests'] = digests
    lnn.consensusParser.consensus['headers']['package'].push(pack)
    lnn.consensusParser.nextLine()
}

/**
 * Parses the field package
 * @throws NotValidFlagException if one of the flags is not in the valid flag list
 */
lnn.consensusParser.consumeKnownFlags = function() {
    lnn.consensusParser.consensus['headers']['flags'] = lnn.consensusParser.tryParseFlags()
    lnn.consensusParser.nextLine()
}

/**
 * Try to parse the fields recommended-client-protocols, recommended-relay-protocols, required-client-protocols and required-client-protocols if they are present
 * @param {string} word either client-versions or server-versions
 */
lnn.consensusParser.tryConsumeProtocols = function(word) {
    if (lnn.consensusParser.consensus['headers'][word] !== undefined) throw `AlreadyPresentException: ${word} can only appear once`
    if (lnn.consensusParser.words[0] === word) {
        lnn.consensusParser.consensus['headers'][word] = lnn.consensusParser.tryParseRanges(lnn.consensusParser.words.splice(1, lnn.consensusParser.words.length))
        lnn.consensusParser.nextLine()
    }

}
/**
 * Try to parse the field params if it is present
 */
lnn.consensusParser.tryConsumeParams = function() {
    if (lnn.consensusParser.words[0] === 'params') {
        lnn.consensusParser.consensus['headers']['params'] = lnn.consensusParser.tryParseParams()
        lnn.consensusParser.nextLine()
    }
}

/**
 * Try to parse the fields shared-rand-previous-value and shared-rand-current-value if they are present
 * @param {string} word specify the field 
 */
lnn.consensusParser.tryConsumeShareRand = function(word) {
    if (lnn.consensusParser.consensus['headers'][word] !== undefined) throw `AlreadyPresentException: ${word} can only appear once`
    if (lnn.consensusParser.words[0] === word) {
        let reveals = Number(lnn.consensusParser.words[1])
        let value = lnn.consensusParser.words[2]

        if (!lnn.consensusParser.isBase64(value)) throw `InvalidParameterException: value ${value} must be in hexadecimal`

        lnn.consensusParser.consensus['headers'][word] = {
            'NumReveals': reveals,
            'Value': value
        }

        lnn.consensusParser.nextLine()
    }
}

//-------------------AUTHORITY PARSER--------------------------------
/**
 * Parses the authority part of the consensus
 * @throws InvalidIPException if address or IP are not valid IP addresses
 * @throws InvalidPortException if dirport or orport are not valid ports
 */
lnn.consensusParser.consumeAuthority = function() {
    if (lnn.consensusParser.words[0] !== 'dir-source') throw `WrongFieldException: there must be at least one dir-source`
    lnn.consensusParser.consensus['dir-sources'] = []

    while (lnn.consensusParser.words[0] === 'dir-source') {
        lnn.consensusParser.consumeDirSource()
    }
}

/**
 * Parse a dir-source
 * @throws InvalidIPException if the IP-address is not valid
 * @throws InvalidPortException if dirport or orport are not valid
 * @throws InvalidParameterException if the vote-digest is not in hexadecimal
 */
lnn.consensusParser.consumeDirSource = function() {
    let dirSource = {}
    lnn.consensusParser.checkFormat(7, 'dir-source')

    dirSource['nickname'] = lnn.consensusParser.words[1]

    if (!lnn.consensusParser.isHex(lnn.consensusParser.words[2])) throw `InvalidParameterException: vote-digest ${lnn.consensusParser.words[2]} must be in hexadecimal`
    dirSource['identity'] = lnn.consensusParser.words[2].toUpperCase()

    dirSource['hostname'] = lnn.consensusParser.words[3]

    if (!lnn.consensusParser.isValidIP(lnn.consensusParser.words[4])) throw `InvalidIPException: ${lnn.consensusParser.words[4]} is not a valid IP`

    dirSource['address'] = lnn.consensusParser.words[4]

    if (!lnn.consensusParser.isValidPort(Number(lnn.consensusParser.words[5])) || !lnn.consensusParser.isValidPort(Number(lnn.consensusParser.words[6]))) throw `InvalidPortException`

    dirSource['dirport'] = Number(lnn.consensusParser.words[5])
    dirSource['orport'] = Number(lnn.consensusParser.words[6])

    lnn.consensusParser.nextLine()
    dirSource['contact'] = lnn.consensusParser.words.splice(1, lnn.consensusParser.words.length).join(' ')
    lnn.consensusParser.nextLine()
    let digest = lnn.consensusParser.tryParseKeyValueString('vote-digest').toUpperCase()

    if (!lnn.consensusParser.isHex(digest)) throw `InvalidParameterException: vote-digest ${digest} must be in hexadecimal`

    dirSource['vote-digest'] = digest
    lnn.consensusParser.consensus['dir-sources'].push(dirSource)
    lnn.consensusParser.nextLine()


}

//-------------------ROUTER PARSER-----------------------------------
/**
 * Consume each router status entry
 * @throws WrongFieldException if there is no router entry
 */
lnn.consensusParser.consumeRouters = function() {
    if (lnn.consensusParser.words[0] !== 'r') throw `WrongFieldException: there must be at least one router`
    lnn.consensusParser.consensus['routers'] = []

    while (lnn.consensusParser.words[0] === 'r') {
        let router = {}
        lnn.consensusParser.consumeRfield(router)

        if (lnn.consensusParser.words[0] === 'a') router['a'] = []
        while (lnn.consensusParser.words[0] === 'a') {
            lnn.consensusParser.consumeAfield(router)
        }

        if(lnn.consensusParser.consensus.flavor == 'microdesc') {
            lnn.consensusParser.consumeMfield(router)
        }

        lnn.consensusParser.consumeSfield(router)
        lnn.consensusParser.tryConsumeVfield(router)
        lnn.consensusParser.tryConsumePrField(router)
        lnn.consensusParser.tryConsumeWfield(router)
        lnn.consensusParser.tryConsumePfield(router)

        lnn.consensusParser.consensus['routers'].push(router)
    }

}

/**
 * Parses the field 'r' of the router status entry
 * @param {} router 
 * @throws InvalidParameterException if the fields are not valid
 */
lnn.consensusParser.consumeRfield = function(router) {
    let len = 9
    if(lnn.consensusParser.consensus.flavor == 'microdesc') len = 8
    lnn.consensusParser.checkFormat(len, 'r')

    router['nickname'] = lnn.consensusParser.words[1]

    if (!lnn.consensusParser.isBase64(lnn.consensusParser.words[2] + "=")) throw `InvalidParameterException: identity ${lnn.consensusParser.words[2]} must be in base64`
    router['identity'] = lnn.consensusParser.words[2]
    
    let nxt = 3
    if(lnn.consensusParser.consensus.flavor == 'unflavored') {
        if (!lnn.consensusParser.isBase64(lnn.consensusParser.words[3] + "=")) throw `InvalidParameterException: digest ${lnn.consensusParser.words[3]} must be in base64`
        router['digest'] = lnn.consensusParser.words[3]
        nxt += 1
    }

    if (!lnn.consensusParser.isValidDate(lnn.consensusParser.words[nxt])) throw `InvalidParameterException: date ${lnn.consensusParser.words[nxt]} must have the format YYYY-MM-DD`
    router['date'] = lnn.consensusParser.words[nxt]

    if (!lnn.consensusParser.isValidTime(lnn.consensusParser.words[nxt + 1])) throw `InvalidParameterException: time ${lnn.consensusParser.words[nxt + 1]} must have the format HH:MM:SS`
    router['time'] = lnn.consensusParser.words[nxt + 1]

    if (!lnn.consensusParser.isValidIP(lnn.consensusParser.words[nxt + 2])) throw `InvalidParameterException: IP ${lnn.consensusParser.words[nxt + 2]} must be a valid IP address`
    router['address'] = lnn.consensusParser.words[nxt + 2]

    if (!lnn.consensusParser.isValidPort(Number(lnn.consensusParser.words[nxt + 3]))) throw `InvalidParameterException: ORPort ${lnn.consensusParser.words[nxt + 3]} must be a valid port`
    router['orport'] = Number(lnn.consensusParser.words[nxt + 3])

    if (!lnn.consensusParser.isValidPort(Number(lnn.consensusParser.words[nxt + 4]))) throw `InvalidParameterException: DirPort ${lnn.consensusParser.words[nxt + 4]} must be a valid port`
    router['dirport'] = Number(lnn.consensusParser.words[nxt + 4])

    lnn.consensusParser.nextLine()
}

/**
 * Parses the field 'a' of the router status entry
 * @param {} router 
 * @throws InvalidParameterException if the fields are not valid
 */
lnn.consensusParser.consumeAfield = function(router) {
    let i = lnn.consensusParser.words[1].indexOf("]")
    let address = lnn.consensusParser.words[1].slice(1, i)
    if (!lnn.consensusParser.isValidIP(address)) throw `InvalidParameterException: IP ${address} must be a valid IP address`

    let guessedType = 'IPv6'
    if (lnn.consensusParser.isIPv4(address)) {
        guessedType = 'IPv4'
    }

    let port = Number(lnn.consensusParser.words[1].slice(address.length + 3, lnn.consensusParser.words[1].length))

    if (!lnn.consensusParser.isValidPort(port)) throw `InvalidParameterException: port ${port} must be a valid port`

    router['a'].push({
        'ip': address,
        'port': port,
        'type': guessedType
    })

    lnn.consensusParser.nextLine()

}

/**
 * Parses the field 's' of the router status entry
 * @param {} router 
 */
lnn.consensusParser.consumeSfield = function(router) {
    router['flags'] = lnn.consensusParser.tryParseFlags()
    lnn.consensusParser.nextLine()
}

/**
 * Tries to parse the field 'v' of the router status entry
 * @param {} router 
 */
lnn.consensusParser.tryConsumeVfield = function(router) {
    if (lnn.consensusParser.words[0] === 'v') {
        lnn.consensusParser.checkFormat(3, 'v')
        router['version'] = lnn.consensusParser.words.splice(1, lnn.consensusParser.words.length).join(' ')
        lnn.consensusParser.nextLine()
    }
}
/**
 * Tries to parse the field 'v' of the router status entry
 * @param {} router 
 */
lnn.consensusParser.tryConsumePrField = function(router) {
    if (lnn.consensusParser.words[0] === 'pr') {
        router['protocols'] = lnn.consensusParser.tryParseRanges(lnn.consensusParser.words.splice(1, lnn.consensusParser.words.length))
        lnn.consensusParser.nextLine()
    }
}
/**
 * Tries to parse the field 'w' of the router status entry
 * @param {} router 
 */
lnn.consensusParser.tryConsumeWfield = function(router) {
    if (lnn.consensusParser.words[0] === 'w') {
        router['w'] = lnn.consensusParser.tryParseParams()
        lnn.consensusParser.nextLine()
    }
}
/**
 * Tries to parse the field 'p' of the router status entry
 * @param {} router 
 */
lnn.consensusParser.tryConsumePfield = function(router) {
    if (lnn.consensusParser.words[0] === 'p') {
        lnn.consensusParser.checkFormat(3, 'p')
        if (lnn.consensusParser.words[1] !== 'accept' && lnn.consensusParser.words[1] !== 'reject') throw `WrongParameterException: ${lnn.consensusParser.words[1]} must be either accept or reject`


        let portList = lnn.consensusParser.parse_range_once(lnn.consensusParser.words[2])

        router['exit-policy'] = {
            'type': lnn.consensusParser.words[1],
            'PortList': portList
        }
        lnn.consensusParser.nextLine()
    }
}

/**
 * Parses the field 'm' of the router status entry (for microdesc flavor)
 * @param {} router 
 */
lnn.consensusParser.consumeMfield = function(router) {
    lnn.consensusParser.checkFormat(2, 'm')
    
    if (!lnn.consensusParser.isBase64(lnn.consensusParser.words[1] + "=")) throw `InvalidParameterException: digest ${lnn.consensusParser.words[1]} must be in base64`
        router['micro-digest'] = lnn.consensusParser.words[1]
    
    lnn.consensusParser.nextLine()
}


//-------------------FOOTER PARSER ----------------------------------

/**
 * Consume the footer
 * @throws WrongFieldException if there is no footer or no signature
 */
lnn.consensusParser.consumeFooter = function() {
    if (lnn.consensusParser.words[0] !== 'directory-footer') throw `WrongFieldException: there must be a footer`
    lnn.consensusParser.nextLine()
    lnn.consensusParser.consensus['footer'] = {}
    lnn.consensusParser.tryConsumeBandwidthWeights()

    if (lnn.consensusParser.words[0] !== 'directory-signature') throw `WrongFieldException: there must be at least one signature`
    lnn.consensusParser.consensus['footer']['directory-signatures'] = []

    while (lnn.consensusParser.words[0] === 'directory-signature') {
        lnn.consensusParser.consensus['footer']['directory-signatures'].push(lnn.consensusParser.consumeSignature());
    }

}

/**
 * Tries to consume the bandwidth weights
 */
lnn.consensusParser.tryConsumeBandwidthWeights = function() {
    if (lnn.consensusParser.words[0] === 'bandwidth-weights') {
        lnn.consensusParser.consensus['footer']['bandwidth-weights'] = lnn.consensusParser.tryParseParams()
        lnn.consensusParser.nextLine()
    }
}

/**
 * Consumes the signature
 * @throws WrongFieldException if the first field is not directory-signature
 * @throws InvalidParameterException if either the identity or the signing-key-digest are not in hexadecimal
 */
lnn.consensusParser.consumeSignature = function() {
    if (lnn.consensusParser.words[0] !== 'directory-signature') throw `WrongFieldException: next field must be directory-signature`
    let length = lnn.consensusParser.words.length

    let algo
    let remaining
    if (length === 4) {
        algo = lnn.consensusParser.words[1]
        remaining = lnn.consensusParser.words.splice(2, length)
    } else if (length === 3) {
        algo = 'sha1'
        remaining = lnn.consensusParser.words.splice(1, length)
    }
    else throw `WrongParameterException: directory-signature has 3 or 4 arguments`

    let identity = remaining[0]
    if (!lnn.consensusParser.isHex(identity)) throw `InvalidParameterException: the identity ${identity} must be in hexadecimal`

    let digest = remaining[1]
    if (!lnn.consensusParser.isHex(digest)) throw `InvalidParameterException: the signing-key-digest ${digest} must be in hexadecimal`

    lnn.consensusParser.nextLine()

    let signature = lnn.consensusParser.parseSignature()
    if (lnn.consensusParser.index < lnn.consensusParser.totalLines - 1) lnn.consensusParser.nextLine()

    return {
        'Algorithm': algo,
        'identity': identity,
        'signing-key-digest': digest,
        'signature': signature
    }
}
//-------------------GENERAL PARSER-----------------------------------

/**
* Parses lines with the format "field value" where value is an integer and field must be equal to word and return value. 
* @param {string} word indicates to which field we are adding the newly parsed line
* @throws NotEqualException if lnn.consensusParser.words[0] != word
* @throws WrongParameterException if lnn.consensusParser.words[1] is not a number
* @throws WrongFormatException if lnn.consensusParser.words.length is not 2
*/
lnn.consensusParser.tryParseKeyValueInteger = function(word,expectedLength = 2) {
    lnn.consensusParser.checkFormat(expectedLength, word)
    if (isNaN(lnn.consensusParser.words[1])) throw `WrongParameterException: ${lnn.consensusParser.words[1]} is not a number`

    return Math.floor(lnn.consensusParser.words[1])
}

/**
 * Parses lines with the format "field value" where value is a string and field must be equal to word and return value. 
 * @param {string} word indicates to which field we are adding the newly parsed line
 * @throws NotEqualException if lnn.consensusParser.words[0] != word
 * @throws WrongFormatException if lnn.consensusParser.words.length is not 2
 */
lnn.consensusParser.tryParseKeyValueString = function(word) {
    lnn.consensusParser.checkFormat(2, word)
    return lnn.consensusParser.words[1]
}

/**
 * Parses lines with the format "field YYYY-MM-DD HH:MM:SS" where field must be equal to word and return a date object
 * @param {string} word indicates to which field we are adding the newly parsed line
 * @throws NotEqualException if lnn.consensusParser.words[0] != word
 * @throws WrongFormatException if lnn.consensusParser.words.length is not 2
 * @throws NonValidDateException if the date is not valid
 * @throws NonValidTimeException if the time is not valid
 */
lnn.consensusParser.tryParseDate = function(word) {
    lnn.consensusParser.checkFormat(3, word)
    if (!lnn.consensusParser.isValidDate(lnn.consensusParser.words[1])) throw `NonValidDateException: ${lnn.consensusParser.words[1]} is not a valid date`
    if (!lnn.consensusParser.isValidTime(lnn.consensusParser.words[2])) throw `NonValidTimeException: ${lnn.consensusParser.words[2]} is not a valid time`

    return {
        "date": lnn.consensusParser.words[1],
        "time": lnn.consensusParser.words[2]
    }
}

/**
 * Parses lines with the format "field list" where list is a comma separated list, returns the list as an array
 * @param {string} word indicates to which field we are adding the newly parsed line
 * @throws NotEqualException if lnn.consensusParser.words[0] != word
 * @throws WrongFormatException if lnn.consensusParser.words.length is not 2
 */
lnn.consensusParser.tryParseCommaSeparatedList = function(word) {
    lnn.consensusParser.checkFormat(2, word)
    return lnn.consensusParser.words[1].split(",")
}

/**
* Parse the ranges of the protocols
* @param pairs Array of entries => Keyword=Values where values is the range
*/
lnn.consensusParser.tryParseRanges = function(pairs) {
    let content = {}

    for (let pair of pairs) {
        if (pair.includes("=")) {
            let tmp = pair.split("=")
            content[tmp[0]] = lnn.consensusParser.parse_range_once(tmp[1])
        }
    }

    return content
}

/**
* Helper function to parse the ranges of the protocols
* @param value the range we want to parse
*/
lnn.consensusParser.parse_range_once = function(value) {
    value = value.split(',')
    let subvalues = []

    for (let subvalue of value) {
        if (subvalue.includes('-')) {
            let lowHigh = subvalue.split('-')
            let low = Number(lowHigh[0])
            let high = Number(lowHigh[1])

            if (low === high - 1) {
                subvalues.push([low, high])
            } else {
                subvalues.push([[low, high]])
            }
        } else {
            subvalues.push([Number(subvalue)])
        }
    }
    return subvalues
}
/**
 * Parse the flags
 * @throws NotValidFlagException if one of the flags is not valid
 */
lnn.consensusParser.tryParseFlags = function() {
    let flags = lnn.consensusParser.words.splice(1, lnn.consensusParser.words.length)
    
    for (let f of flags) {
        if (!lnn.consensusParser.validFlags.includes(f)) throw `NotValidFlagException: ${f} is not a valid flag`
    }

    return flags
}

/**
 * Parse signature 
 * @throws WrongFormatException if the line does not start with ----BEGIN
 */
lnn.consensusParser.parseSignature = function() {
    if (lnn.consensusParser.words[0] !== '-----BEGIN') throw `WrongFormatException`
    lnn.consensusParser.nextLine()
    let signature = ''
    while (lnn.consensusParser.lines[lnn.consensusParser.index] !== "-----END SIGNATURE-----") {
        signature += lnn.consensusParser.lines[lnn.consensusParser.index]
        lnn.consensusParser.nextLine()
    }
    return signature
}


/**
 * parase parameters
 */
lnn.consensusParser.tryParseParams = function() {
    let content = {}
    for (let param of lnn.consensusParser.words.splice(1, lnn.consensusParser.words.length)) {
        let tmp = param.split('=')
        content[tmp[0]] = Number(tmp[1])
    }
    return content
}

/**
* Check if the string in date has the format YYYY-MM-DD
* @param {string} time String representing the date
*/
lnn.consensusParser.isValidDate = function(date) {
    if (typeof date !== 'string') return false
    let regex = /^\d{4}[-](0[1-9]|1[012])[-](0[1-9]|[12][0-9]|3[01])$/
    return regex.test(date)
}

/**Check if the string time has the format HH:MM:SS
 * @param {string} time String representing the time
 */
lnn.consensusParser.isValidTime = function(time) {
    if (typeof time !== 'string') return false
    let regex = /^(0[0-9]|1[0-9]|2[0-3])[:][0-5][0-9][:][0-5][0-9]$/
    return regex.test(time)
}

/**
 * Check if the IP address is valid (either IPv4 or IPv6)
 * @param {string} IP the address we want to check
 */
lnn.consensusParser.isValidIP = function(IP) {
    let regex = /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$|^(([a-zA-Z]|[a-zA-Z][a-zA-Z0-9\-]*[a-zA-Z0-9])\.)*([A-Za-z]|[A-Za-z][A-Za-z0-9\-]*[A-Za-z0-9])$|^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/
    return regex.test(IP)
}

/**
 * Check if the IP is an IPv4 address
 * @param {string} IP 
 */
lnn.consensusParser.isIPv4 = function(IP) {
    let regex = /^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/
    return regex.test(IP)
}

/**
 * Check if the given port is valid
 * @param {number} port
 */
lnn.consensusParser.isValidPort = function(port) {
    if (isNaN(port)) return false
    //TODO: < or <= ?
    return port >= 0 && port <= 65535
}

/**
 * Check if the given string is in hexadecimal
 * @param {string} str 
 */
lnn.consensusParser.isHex = function(str) {
    let regex = /^[a-fA-F0-9]+$/
    return regex.test(str)
}

/**
 * Check if the given string is in base 64
 * @param {string} str 
 */
lnn.consensusParser.isBase64 = function(str) {
    let regex = /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/
    return regex.test(str)
}

/**
 * Updates lnn.consensusParser.index and lnn.consensusParser.words
 * @throws EndOfFileException if the end of the file has already been reached
 */
lnn.consensusParser.nextLine = function() {
    if (lnn.consensusParser.index >= lnn.consensusParser.totalLines) throw `EndOfFileException: there are no lines to parse`
    lnn.consensusParser.words = lnn.consensusParser.lines[++lnn.consensusParser.index].split(" ")
}

/**
 * Checks if words has the expected size and that words[0] is equal to word
 * @param {number} expectedLength the expected length of words
 * @param {string} expectedWord the expected word[0]
 */
lnn.consensusParser.checkFormat = function(expectedLength, expectedWord) {
    if (lnn.consensusParser.words.length != expectedLength) throw `WrongFormatException: ${expectedLength} fields are expected`
    if (lnn.consensusParser.words[0] != expectedWord) throw `NotEqualException:b ${expectedWord} is not equal to ${lnn.consensusParser.words[0]}`
}

lnn.parser = {}

lnn.parser.descriptors = {
    line_count: 0,
    total_lines: -1,
    lines: undefined,
    valid_bridge_distribution: ["none", "any", "https", "email", "moat", "hyphae"],
    
    exactly_once: ["router", "bandwidth", "published", "onion-key", "signing-key", "router-signatures"],
    exactly_once_mic: ["onion-key","policy","ipv6-policy"],

    parse: function (raw_descriptors, flavor = 'microdesc') {
        if(flavor != 'unflavored' && flavor != 'microdesc') {
            throw 'Error: Unexpected flavor'
        }

        let descriptors = []
        lnn.parser.descriptors.lines = raw_descriptors.split('\n')
        lnn.parser.descriptors.line_count = 0
        lnn.parser.descriptors.total_lines = lnn.parser.descriptors.lines.length
        lnn.parser.descriptors.flavor = flavor

        while (lnn.parser.descriptors.line_count < lnn.parser.descriptors.total_lines) {
            if(lnn.parser.descriptors.lines[lnn.parser.descriptors.line_count] === ""){
                lnn.parser.descriptors.line_count++
                continue
            }
            
            let descriptor = lnn.parser.descriptors.consume_one_node()
            descriptor['flavor'] = flavor
            descriptors.push(descriptor)
        }
        return descriptors
    },
    validate: function(descriptors,consensus,flavor = 'microdesc',fail_on_missing = false) {
        let digest_name = (flavor == 'unflavored') ? 'digest' : 'micro-digest'
        let digests = []
        for (idx = 0; idx < consensus['routers'].length; idx++){ 
            let router = consensus['routers'][idx]    
            digests.push(router[digest_name])
        }

        let obtained = []
        for (idx = 0; idx < descriptors.length; idx++){ 
            obtained.push(descriptors[idx][digest_name])    
        }

        let invalid = []
        console.log(obtained.length)
        for (idx = 0; idx < digests.length; idx++){
            let digest = digests[idx]
            if (obtained.includes(digest)){
                obtained.splice( obtained.indexOf(digest), 1 );
            }
            else
                invalid.push(digest)
        }
        console.log(obtained.length)
           
        if (obtained.length){
            throw `Invalid descriptors found`
        }

        if (fail_on_missing && invalid.length > 0)
            throw `Failed to obtain some descriptors`
    }
}

/**
 * Parse one node in the raw data file
 * @returns {object} the descriptor of the parsed node
 */
 let tot  =0
lnn.parser.descriptors.consume_one_node = function () {

    if (lnn.parser.descriptors.lines[lnn.parser.descriptors.line_count].startsWith('@type')) lnn.parser.descriptors.line_count++
    if (lnn.parser.descriptors.lines[lnn.parser.descriptors.line_count] === ""){
        lnn.parser.descriptors.line_count++
    }

    let descriptor = {}
    let startLine = lnn.parser.descriptors.line_count

    if(lnn.parser.descriptors.flavor == 'unflavored') {
        descriptor = lnn.parser.descriptors.consume_router(descriptor)
        descriptor = lnn.parser.descriptors.try_consume_identity_ed25519(descriptor)
    } else {
        descriptor = lnn.parser.descriptors.consume_onion_key(descriptor)
    }

    let line = lnn.parser.descriptors.lines[lnn.parser.descriptors.line_count]
    

    while (true) {
        if(lnn.parser.descriptors.flavor == 'unflavored') {
            if(line.startsWith("router-signature")) 
                break
        } else{
            if(lnn.parser.descriptors.line_count == lnn.parser.descriptors.total_lines
                || line.startsWith('@type') || line.startsWith('onion-key'))
                break
        }


        let index_sp = line.indexOf(" ")
        let first_word = (index_sp === -1) ? line : line.substring(0, index_sp)
        switch (first_word) {
            case "master-key-ed25519":
                descriptor = lnn.parser.descriptors.consume_master_key_ed25519(descriptor)
                break
            case "platform":
                descriptor = lnn.parser.descriptors.consume_platform(descriptor)
                break
            case "published":
                descriptor = lnn.parser.descriptors.consume_published(descriptor)
                break
            case "bandwidth":
                descriptor = lnn.parser.descriptors.consume_bandwidth(descriptor)
                break
            case "fingerprint":
                descriptor = lnn.parser.descriptors.consume_fingerprint(descriptor)
                break
            case "hibernating":
                descriptor = lnn.parser.descriptors.consume_hibernating(descriptor)
                break
            case "uptime":
                descriptor = lnn.parser.descriptors.consume_uptime(descriptor)
                break
            case "extra-info-digest":
                descriptor = lnn.parser.descriptors.consume_extra_info_digest(descriptor)
                break
            case "caches-extra-info":
                descriptor = lnn.parser.descriptors.consume_single_word_line("caches-extra-info", descriptor)
                break
            case "onion-key":
                descriptor = lnn.parser.descriptors.consume_onion_key(descriptor)
                break
            case "onion-key-crosscert":
                descriptor = lnn.parser.descriptors.consume_onion_key_crosscert(descriptor)
                break
            case "ntor-onion-key":
                descriptor = lnn.parser.descriptors.consume_base64_digest('ntor-onion-key', descriptor)
                break
            case "ntor-onion-key-crosscert":
                descriptor = lnn.parser.descriptors.consume_ntor_onion_key_crosscert(descriptor)
                break
            case "accept":
                descriptor = lnn.parser.descriptors.consume_exit_policy("accept", descriptor)
                break
            case "reject":
                descriptor = lnn.parser.descriptors.consume_exit_policy("reject", descriptor)
                break
            case "signing-key":
                descriptor = lnn.parser.descriptors.consume_signing_key(descriptor)
                break
            case "ipv6-policy":
                descriptor = lnn.parser.consume_exit_policy('ipv6-policy', lnn.parser.descriptors.lines, lnn.parser.descriptors.line_count++, descriptor)
                break
            case "router-sig-ed25519":
                descriptor = lnn.parser.descriptors.consume_router_sig_ed25519(descriptor)
                break
            case "contact":
                descriptor = lnn.parser.consume_contact(lnn.parser.descriptors.lines, lnn.parser.descriptors.line_count++, descriptor)
                break
            case "bridge-distribution":
                descriptor = lnn.parser.descriptors.consume_bridge_distribution(descriptor)
                break
            case "family":
                descriptor = lnn.parser.descriptors.consume_family(descriptor)
                break
            case "read-history":
                descriptor = lnn.parser.descriptors.consume_history("read", descriptor)
                break
            case "write-history":
                descriptor = lnn.parser.descriptors.consume_history("write", descriptor)
                break
            case "eventdns":
                descriptor = lnn.parser.descriptors.consume_eventdns(descriptor)
                break
            case "hidden-service-dir":
                descriptor = lnn.parser.descriptors.consume_single_word_line("hidden-service-dir", descriptor)
                break
            case "allow-single-hop-exits":
                descriptor = lnn.parser.descriptors.consume_single_word_line("allow-single-hop-exits", descriptor)
                break
            case "tunnelled-dir-server":
                descriptor = lnn.parser.descriptors.consume_single_word_line("tunnelled-dir-server", descriptor)
                break
            case "proto":
                descriptor = lnn.parser.consume_proto("proto", lnn.parser.descriptors.lines, lnn.parser.descriptors.line_count++, descriptor)
                break
            case "p":
                descriptor = lnn.parser.consume_exit_policy('p', lnn.parser.descriptors.lines, lnn.parser.descriptors.line_count++, descriptor)
                break
            case "p6":
                descriptor = lnn.parser.consume_exit_policy('p6', lnn.parser.descriptors.lines, lnn.parser.descriptors.line_count++, descriptor)
                break
            case "id":
                descriptor = lnn.parser.descriptors.consume_id(descriptor)
                break
            default:
                ++lnn.parser.descriptors.line_count
                break
        }
        line = lnn.parser.descriptors.lines[lnn.parser.descriptors.line_count]

    }


    if(descriptor['ipv6-policy'] === undefined) descriptor['ipv6-policy'] = {
        "type": "reject",
        "PortList":[[1,65535]]
    }
    if(descriptor['policy'] === undefined) {
        descriptor['policy'] = {
            "type": "reject",
            "PortList":[[1,65535]]
        }
    }


    let fields = lnn.parser.descriptors.exactly_once_mic
    let endLine = lnn.parser.descriptors.line_count //include  till router-signature

    if(lnn.parser.descriptors.flavor == 'unflavored') {
        endLine+=1 //include  till router-signature
        descriptor = lnn.parser.descriptors.consume_router_signature(descriptor)
        fields = lnn.parser.descriptors.exactly_once
    }
    if (!lnn.parser.descriptors.check_exactly_once(descriptor,fields)) throw "Invalid descriptor: some mandatory fields are not present"

    let fullDesc = ""
    for(i = startLine; i < endLine; i++) {
        if(lnn.parser.descriptors.lines[i] == "")
            continue
        fullDesc += (lnn.parser.descriptors.lines[i] + '\n')
    }

    if(lnn.parser.descriptors.flavor == 'unflavored') {
        let digest = sjcl.hash.sha1.hash(fullDesc)
        digest = lnn.enc.base64(lnn.dec.bits(digest))


        while(digest.length > 0 && digest[digest.length - 1] == '=')
            digest = digest.slice(0,-1)
        descriptor['digest'] = digest
    }
    else {
        let mdigest = sjcl.hash.sha256.hash(fullDesc)
        mdigest = lnn.dec.bits(mdigest)
        mdigest = lnn.enc.base64(mdigest)
        
        while(mdigest.length > 0 && mdigest[mdigest.length - 1] == '=')
            mdigest = mdigest.slice(0,-1)
        descriptor['micro-digest'] = mdigest
    }
    return descriptor
}
 
/**
 * Checks that all mandatory fields of the descriptor were parsed
 */
lnn.parser.descriptors.check_exactly_once = function (descriptor,fields) {
    
    if(descriptor['ipv6-policy'] === undefined) descriptor
    
    let parsed = true
    if(descriptor['identity-ed25519'] !== undefined){
        parsed = descriptor["ntor-onion-key-crosscert"] !== undefined && descriptor["onion-key-crosscert"] !== undefined && descriptor["router-sig-ed25519"] !== undefined
    }else{
        parsed = descriptor["router-sig-ed25519"] === undefined
    }

    return parsed && fields.every(field => descriptor[field] !== undefined)
}

/**
 * Consume the field router of the descriptor
 * @param {object} descriptor the currently being built decriptors object
 * @returns {Object} the updated descriptor
 */
lnn.parser.descriptors.consume_router = function (descriptor) {
    let words = lnn.parser.descriptors.lines[lnn.parser.descriptors.line_count].split(' ')
    lnn.parser.check_format(6, 'router', words)

    if (!lnn.parser.is_valid_nickname(words[1])) throw `Invalid nickname: ${words[1]} contains non-alphanumeric characters`
    if (!lnn.parser.is_valid_ipv4(words[2])) throw `Invalid address: ${words[2]} is not a valid iPv4 address`
    if (!lnn.parser.is_valid_port(words[3])) throw `Invalid port: ${words[3]} is not a valid port (0 to 65535)`
    if (!lnn.parser.is_valid_port(words[4])) throw `Invalid port: ${words[4]} is not a valid port (0 to 65535)`
    if (!lnn.parser.is_valid_port(words[5])) throw `Invalid port: ${words[5]} is not a valid port (0 to 65535)`

    descriptor['router'] = {
        "nickname": words[1],
        "address": words[2],
        "orport": Number(words[3]),
        "socksport": Number(words[4]),
        "dirport": Number(words[5])
    }

    ++lnn.parser.descriptors.line_count

    return descriptor
}
/**
 * Consume try to consume the identity ed25519 certificate and its master key
 * @param {object} descriptor the currently being built decriptors object
 * @returns {Object} the updated descriptor
 */
lnn.parser.descriptors.try_consume_identity_ed25519 = function (descriptor) {
    let words = lnn.parser.descriptors.lines[lnn.parser.descriptors.line_count].split(' ')
    if (words[0] === 'identity-ed25519') {
        lnn.parser.check_format(1, 'identity-ed25519', words)
        ++lnn.parser.descriptors.line_count

        let [offset, certificate] = lnn.parser.consume_pem(lnn.parser.descriptors.lines, lnn.parser.descriptors.line_count)
        lnn.parser.descriptors.line_count += offset + 1
        descriptor['identity'] = {
            "type": "ed25519",
            "cert": certificate
        }

        return descriptor
    }

    return descriptor
}

lnn.parser.descriptors.consume_id = function (descriptor) {
    let words = lnn.parser.descriptors.lines[lnn.parser.descriptors.line_count].split(' ')

    lnn.parser.check_format(3, 'id', words)
    let type = words[1]

    if(type != 'rsa1024' && type != 'ed25519') 
        throw `Unexpected identity type  ${type}`

    lnn.parser.check_reused('identity', descriptor)
    if (!lnn.parser.is_valid_base64(lnn.parser.add_ending(words[2]))) 
        throw `Invalid master key: the master key ${words[2]} must be in base64`

    descriptor['identity'] = {
        "type": type,
        "master-key": words[2]
    }

    ++lnn.parser.descriptors.line_count
    return descriptor
}

/**
 * Parse the master-key-ed25519
 * @param {object} descriptor the currently being built decriptors object
 * @returns {Object} the updated descriptor
 */
lnn.parser.descriptors.consume_master_key_ed25519 = function (descriptor) {

    let words = lnn.parser.descriptors.lines[lnn.parser.descriptors.line_count].split(' ')
    lnn.parser.check_format(2, 'master-key-ed25519', words)
    lnn.parser.check_reused('master-key-ed25519', descriptor)
    let key = words[1]
    if (!lnn.parser.is_valid_base64(lnn.parser.add_ending(key))) throw `Invalid master key: the master key ${words[1]} must be in base64`
    descriptor['identity']['master-key'] = key
    lnn.parser.descriptors.line_count++

    return descriptor
}

/**
 * Consume the line if it starts with platform
 * @param {object} descriptor the currently being built decriptors object
 * @returns {Object} the updated descriptor
 */
lnn.parser.descriptors.consume_platform = function (descriptor) {
    lnn.parser.check_reused("platform", descriptor)
    let line = lnn.parser.descriptors.lines[lnn.parser.descriptors.line_count]
    let platform = line.substring("platform".length + 1)
    descriptor['platform'] = platform
    lnn.parser.descriptors.line_count++
    return descriptor
}

/**
 * Consume the time of the published field
 * @param {object} descriptor the currently being built decriptors object
 * @returns {Object} the updated descriptor
 */
lnn.parser.descriptors.consume_published = function (descriptor) {
    lnn.parser.check_reused('published', descriptor)
    descriptor['published'] = lnn.parser.consume_date('published', lnn.parser.descriptors.lines[lnn.parser.descriptors.line_count])
    ++lnn.parser.descriptors.line_count
    return descriptor
}

/**
 * Consume the bandwidth fields 
 * @param {object} descriptor the currently being built decriptors object
 * @returns {Object} the updated descriptor
 */
lnn.parser.descriptors.consume_bandwidth = function (descriptor) {
    lnn.parser.check_reused('bandwidth', descriptor)
    let words = lnn.parser.descriptors.lines[lnn.parser.descriptors.line_count++].split(" ")
    lnn.parser.check_format(4, 'bandwidth', words)

    let avg = Number(words[1])
    let burst = Number(words[2])
    let obs = Number(words[3])

    if (avg < 0 || burst < 0 || obs < 0) throw `Invalid bandwidth: must be non-negative`

    descriptor['bandwidth'] = {
        "avg": avg,
        "burst": burst,
        "observed": obs
    }

    return descriptor
}

/**
 * Consume the fingerprint field
 * @param {object} descriptor the currently being built decriptors object
 * @returns {Object} the updated descriptor
 */
lnn.parser.descriptors.consume_fingerprint = function (descriptor) {
    lnn.parser.check_reused('fingerprint', descriptor)
    let line = lnn.parser.descriptors.lines[lnn.parser.descriptors.line_count++]
    let index_sp = line.indexOf(" ")
    let fingerprint = line.substring(index_sp + 1)
    
    let bytes = fingerprint.split(" ")
    let join_bytes = bytes.join("")
    if (bytes.length != 10) throw `Invalid fingerprint: wrong size`
    if (!lnn.parser.is_valid_hex(join_bytes)) throw `Invalid fingerprint: not a hex string`

    let identity = sjcl.codec.hex.toBits(join_bytes)
    identity = sjcl.codec.base64.fromBits(identity).replace("=", "")

    descriptor['fingerprint'] = fingerprint
    descriptor['router']['identity'] = identity

    return descriptor
}

/**
 * Consume the hibernating field
 * @param {object} descriptor the currently being built decriptors object
 * @returns {Object} the updated descriptor
 */
lnn.parser.descriptors.consume_hibernating = function (descriptor) {
    lnn.parser.check_reused('hibernating', descriptor)
    let words = lnn.parser.descriptors.lines[lnn.parser.descriptors.line_count++].split(" ")
    lnn.parser.check_format(2, 'hibernating', words)

    let b = Number(words[1])
    if (b !== 0 && b !== 1) throw `Invalid boolean`
    descriptor['hibernating'] = b
    return descriptor
}

/**
 * Consume the uptime field
 * @param {object} descriptor the currently being built decriptors object
 * @returns {Object} the updated descriptor
 */
lnn.parser.descriptors.consume_uptime = function (descriptor) {
    lnn.parser.check_reused('uptime', descriptor)
    let words = lnn.parser.descriptors.lines[lnn.parser.descriptors.line_count++].split(" ")
    lnn.parser.check_format(2, 'uptime', words)

    let uptime = Number(words[1])

    if (uptime < 0) throw `Invalid uptime: uptime must be non-negative`

    descriptor['uptime'] = uptime

    return descriptor
}

/**
 * Consume the onion key
 * @param {object} descriptor the currently being built decriptors object
 * @returns {Object} the updated descriptor
 */
lnn.parser.descriptors.consume_onion_key = function (descriptor) {
    let words = lnn.parser.descriptors.lines[lnn.parser.descriptors.line_count].split(" ")
    lnn.parser.check_reused('onion-key', descriptor)
    lnn.parser.check_format(1,'onion-key',words)
    return lnn.parser.descriptors.consume_key('onion-key', descriptor)
}

/**
 * Consume the extra info digest
 * @param {object} descriptor the currently being built decriptors object
 * @returns {Object} the updated descriptor
 */
lnn.parser.descriptors.consume_extra_info_digest = function (descriptor) {
    lnn.parser.check_reused('extra-info-digest', descriptor)
    let words = lnn.parser.descriptors.lines[lnn.parser.descriptors.line_count++].split(" ")
    if (words.length != 2 && words.length != 3) throw `Invalid format: 1 or 2 fields are expected`

    let sha1 = words[1]
    if (!lnn.parser.is_valid_hex(sha1)) throw `Invalid encoding: the sha1 digest must be in hexadecimal`
    descriptor["extra-info-digest"] = {
        "sha1": sha1
    }

    if (words.length === 3) {
        let sha256 = words[2]
        if (!lnn.parser.is_valid_base64(lnn.parser.add_ending(sha256))) throw `Invalid encoding: the sha256 digest must base 64`
        descriptor['extra-info-digest']['sha256'] = sha256
    }

    return descriptor
}

/**
 * Consume the single word line
 * @param {string} type the field
 * @param {object} descriptor the currently being built decriptors object
 * @returns {Object} the updated descriptor
 */
lnn.parser.descriptors.consume_single_word_line = function (type, descriptor) {
    lnn.parser.check_reused(type, descriptor)
    descriptor[type] = 'true'
    ++lnn.parser.descriptors.line_count

    return descriptor
}

/**
 * Consume the RSA signature generated using the onion-key
 * @param {object} descriptor the currently being built decriptors object
 * @returns {Object} the updated descriptor
 */
lnn.parser.descriptors.consume_onion_key_crosscert = function (descriptor) {
    lnn.parser.check_reused('onion-key-crosscert', descriptor)
    return lnn.parser.descriptors.consume_key('onion-key-crosscert', descriptor)
}

/**
 * Consume the ntor onion key  of the descriptor
 * @param {object} descriptor the currently being built decriptors object
 * @returns {Object} the updated descriptor
 */
lnn.parser.descriptors.consume_ntor_onion_key_crosscert = function (descriptor) {

    lnn.parser.check_reused('ntor-onion-key-crosscert', descriptor)
    let words = lnn.parser.descriptors.lines[lnn.parser.descriptors.line_count].split(" ")
    lnn.parser.check_format(2, 'ntor-onion-key-crosscert', words)

    let bit = Number(words[1])
    if (bit != 0 && bit != 1) throw "Invalid bit for ntor-onion-key-crosscert"

    let [offset, cert] = lnn.parser.consume_pem(lnn.parser.descriptors.lines, ++lnn.parser.descriptors.line_count)
    lnn.parser.descriptors.line_count += offset + 1

    descriptor['ntor-onion-key-crosscert'] = {
        "bit": bit,
        "cert": cert
    }

    return descriptor

}

/**
 * Consume the ED25519 signature
 * @param {object} descriptor the currently being built decriptors object
 * @returns {Object} the updated descriptor
 */
lnn.parser.descriptors.consume_router_sig_ed25519 = function (descriptor) {
    let words = lnn.parser.descriptors.lines[lnn.parser.descriptors.line_count++].split(" ")
    lnn.parser.check_format(2, "router-sig-ed25519", words)
    lnn.parser.check_reused("router-signatures", descriptor)

    let signature = words[1]

    if (!lnn.parser.is_valid_base64(lnn.parser.add_ending(signature))) throw "Invalid digest: must be a base 64 string"

    descriptor["router-signatures"] = {
        "ed25519": signature,
    }

    return descriptor
}

/**
 * Consume the PKCS1 padded signature of the descriptor
 * @param {object} descriptor the currently being built decriptors object
 * @returns {Object} the updated descriptor
 */
lnn.parser.descriptors.consume_router_signature = function (descriptor) {
    let words = lnn.parser.descriptors.lines[lnn.parser.descriptors.line_count].split(' ')
    if (words[0] === 'router-signature') {
        lnn.parser.check_format(1, 'router-signature', words)
        ++lnn.parser.descriptors.line_count

        let [offset, signature] = lnn.parser.consume_pem(lnn.parser.descriptors.lines, lnn.parser.descriptors.line_count)
        lnn.parser.descriptors.line_count += offset + 1

        if (descriptor["router-signatures"] === undefined) {
            descriptor["router-signatures"] = {}
        }

        descriptor["router-signatures"]["rsa"] = signature

        return descriptor
    }
}

/**
 * Consume the field bridge-distribution
 * @param {object} descriptor the currently being built decriptors object
 * @returns {Object} the updated descriptor
 */
lnn.parser.descriptors.consume_bridge_distribution = function (descriptor) {
    lnn.parser.check_reused('bridge-distribution', descriptor)
    let words = lnn.parser.descriptors.lines[lnn.parser.descriptors.line_count++].split(" ")
    lnn.parser.check_format(2, 'bridge-distribution', words)
    let dist = words[1]
    if (!lnn.parser.descriptors.valid_bridge_distribution.includes(dist)) dist = "none"

    descriptor['bridge-distribution'] = dist

    return descriptor

}

/**
 * Consume the field family
 * @param {object} descriptor the currently being built decriptors object
 * @returns {Object} the updated descriptor
 */
lnn.parser.descriptors.consume_family = function (descriptor) {
    lnn.parser.check_reused("family", descriptor)

    let words = lnn.parser.descriptors.lines[lnn.parser.descriptors.line_count++].split(" ")
    let family = words.splice(1)

    descriptor['family'] = family

    return descriptor
}
/**
 * Consume the history fields
 * @param {string} type the type of history
 * @param {object} descriptor the currently being built decriptors object
 * @returns {Object} the updated descriptor
 */
lnn.parser.descriptors.consume_history = function (type, descriptor) {
    let field = type + "-history"
    lnn.parser.check_reused(field, descriptor)
    let words = lnn.parser.descriptors.lines[lnn.parser.descriptors.line_count++].split(" ")
    lnn.parser.check_format(6, type + "-history", words)

    let date = words[1]
    if (!lnn.parser.is_valid_date(date)) throw "Invalid date"

    let time = words[2]
    if (!lnn.parser.is_valid_time(time)) throw "Invalid time"

    let interval = Number(words[3].substring(1))
    let bytes = words[5].split(",").map(x => Number(x))

    descriptor[field] = {
        "date": date,
        "time": time,
        "interval": interval,
        "bytes": bytes
    }

    return descriptor
}

/**
 * Consume the field eventdns
 * @param {object} descriptor the currently being built decriptors object
 * @returns {Object} the updated descriptor
 */
lnn.parser.descriptors.consume_eventdns = function (descriptor) {
    lnn.parser.check_reused("eventdns", descriptor)
    let words = lnn.parser.descriptors.lines[lnn.parser.descriptors.line_count++].split(" ")
    lnn.parser.check_format(2, "eventdns", words)

    let bool = Number(words[1])

    if (bool != 0 && bool != 1) throw "Invalid boolean"

    decriptor["eventdns"] = bool
    return descriptor
}

/**
 * Consume field with a base 64 digest
 * @param {String} field the field we want to parse
 * @param {object} descriptor the currently being built decriptors object
 * @returns {Object} the updated descriptor
 */
lnn.parser.descriptors.consume_base64_digest = function (field, descriptor) {
    let words = lnn.parser.descriptors.lines[lnn.parser.descriptors.line_count++].split(" ")
    lnn.parser.check_format(2, field, words)
    lnn.parser.check_reused(field, descriptor)

    let key = words[1]

    if (!lnn.parser.is_valid_base64(lnn.parser.add_ending(key))) throw "Invalid digest: must be a base 64 string"

    descriptor[field] = key

    return descriptor
}

/**
 * Consume the signing keys
 * @param {object} descriptor the currently being built decriptors object
 * @returns {Object} the updated descriptor
 */
lnn.parser.descriptors.consume_signing_key = function (descriptor) {
    lnn.parser.check_reused('signing-key', descriptor)
    return lnn.parser.descriptors.consume_key('signing-key', descriptor)
}

/**
 * Parse the accept and reject exit policies and their exitpattern
 * @param {string} type either reject or accept
 * @param {object} descriptor the currently being built decriptors object
 * @returns {Object} the updated descriptor
 */
lnn.parser.descriptors.consume_exit_policy = function (type, descriptor) {
    let words = lnn.parser.descriptors.lines[lnn.parser.descriptors.line_count++].split(" ")
    lnn.parser.check_format(2, type, words)

    if (descriptor['policy'] === undefined) {
        descriptor['policy'] = {
            "type": "exitpattern",
            "rules": []
        }
    }

    let rule = {
        "type": type,
        "pattern": words[1]
    }

    descriptor['policy']["rules"].push(rule)

    return descriptor
}

/**
 * Consume the key of the given field and update the descriptor
 * @param {string} field the field of the descriptor
 * @param {object} descriptor the currently being built decriptors object
 * @returns {Object} the updated descriptor
 */
lnn.parser.descriptors.consume_key = function (field, descriptor) {
    [offset, key] = lnn.parser.consume_pem(lnn.parser.descriptors.lines, ++lnn.parser.descriptors.line_count)
    lnn.parser.descriptors.line_count += offset + 1
    descriptor[field] = key
    return descriptor
}

/**
* Checks if words has the expected size and that the first word of the line is equal to a given word
* @param {number} expected_length the expected length of the line
* @param {string} expected_word the expected word
* @param {Array} words the line splitted into words
*/
lnn.parser.check_format = function (expected_length, expected_word, words) {
    if (words.length != expected_length) {
        throw `wrong_format_exception: ${expected_length} fields are expected`
    } else if (words[0] !== expected_word) {
        throw `not_equal_exception: ${expected_word} is not equal to ${words[0]}`
    }
}

/**
* Check if the IP is an IPv4 address
* @param {string} IP 
*/
lnn.parser.is_valid_ipv4 = function (IP) {
    let regex = /^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/
    return regex.test(IP)
}

/**
 * Check if the given port is valid
 * @param {number} port
 */
lnn.parser.is_valid_port = function (port) {
    if (isNaN(port)) return false
    return port >= 0 && port <= 65535
}

/**
 * Check if the given nickname is valid
 * @param {string} nickname the nickname we want to verify
 * @returns {boolean} the validity of the nickname 
 */
lnn.parser.is_valid_nickname = function (nickname) {
    let regex = /^[a-z0-9]+$/i
    return regex.test(nickname)
}

/**
* Check if the given string is in base 64
* @param {string} str 
*/
lnn.parser.is_valid_base64 = function (str) {
    let regex = /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/
    return regex.test(str)
}
/**
 * Check if the given string is in hexadecimal
 * @param {string} str 
 */
lnn.parser.is_valid_hex = function (str) {
    let regex = /^[a-fA-F0-9]+$/
    return regex.test(str)
}

/**
 * Consume a PEM format field
 * @param {Array} lines the splitted textfield
 * @param {Number} start where the pem starts
 * @param {function} base_function optional function to verifiy the base
 * @returns {Array} tuple containing the parsed pem and the offset
 */
lnn.parser.consume_pem = function (lines, start) {
    let offset = 0;
    let content = ''
    if (!lines[start].startsWith('-----BEGIN')) throw `Invalid signature, certificate or key: must begin with "-----BEGIN"`
    offset++
    while (!lines[start + offset].startsWith("-----END")) {
        content += lines[start + offset]
        offset++
    }

    if (!lnn.parser.is_valid_base64(content)) throw "Invalid PEM: must be in base 64"

    return [offset, content]
}

/**
 * Parse ranges
 * @param {string} ranges format: Keyword=Values...
 * @returns {object} the parsed ranges
 */
lnn.parser.parse_range = function (ranges) {
    let content = {}
    for (let pair of ranges) {
        if (pair.includes("=")) {
            let tmp = pair.split("=")
            content[tmp[0]] = lnn.parser.parse_range_once(tmp[1])
        }
    }
    return content
}

/**
 * This function parses ranges with the format nbr,nbr,.. where nbr is either an integer or 2 integers separated by a comma
 * @param {string} value the sting we want to parse
 * @returns {Array} a list containing the ranges 
 */
lnn.parser.parse_range_once = function (value) {
    value = value.split(',')
    let subvalues = []

    for (let subvalue of value) {
        if (subvalue.includes('-')) {
            let lowHigh = subvalue.split('-')
            let low = Number(lowHigh[0])
            let high = Number(lowHigh[1])

            subvalues.push([low, high])
        } else {
            subvalues.push([Number(subvalue)])
        }
    }
    return subvalues
}

/**
 * This function parses the exit policies formatted as: field (accept/reject) PortList
 * @param {string} field the field we want to parse
 * @param {Array} lines the raw file split by '\n'
 * @param {Number} index the index of the line
 * @param {object} node the node we want to update
 * @returns the updated node
 */
lnn.parser.consume_exit_policy = function (field, lines, index, node) {
    lnn.parser.check_reused(field, node)
    let words = lines[index].split(" ")
    lnn.parser.check_format(3, field, words)

    let policy = words[1]
    if (policy !== 'accept' && policy !== 'reject') throw "Invalid policy: policy must either be accept or reject"

    let ranges = lnn.parser.parse_range_once(words[2])
    
    if(field  == 'p') field = 'policy'
    if(field == 'p6') field = 'ipv6-policy'

    node[field] = {
        'type': policy,
        'PortList': ranges
    }

    return node
}

/**
 * This function parses the contacts
 * @param {string} field the field we want to parse
 * @param {Array} lines the raw file split by '\n'
 * @param {Number} index the index of the line
 * @param {object} node the node we want to update
 * @returns the updated node
 */
lnn.parser.consume_contact = function (lines, index, node) {
    lnn.parser.check_reused("contact", node)
    let contact = lines[index].substring("contact".length + 1)
    node["contact"] = contact

    return node
}


/**
* Check if the string in date has the format YYYY-MM-DD
* @param {string} time String representing the date
*/
lnn.parser.is_valid_date = function (date) {
    if (typeof date !== 'string') return false
    let regex = /^\d{4}[-](0[1-9]|1[012])[-](0[1-9]|[12][0-9]|3[01])$/
    return regex.test(date)
}

/**Check if the string time has the format HH:MM:SS
 * @param {string} time String representing the time
 */
lnn.parser.is_valid_time = function (time) {
    if (typeof time !== 'string') return false
    let regex = /^(0[0-9]|1[0-9]|2[0-3])[:][0-5][0-9][:][0-5][0-9]$/
    return regex.test(time)
}

/**
 * Consume the line containing a date with the format field YYYY-MM-DD HH:MM:SS
 * @param {string} field the field we are consuming
 * @param {string} line the line we are consuming
 * @returns {object} object containing both the date and the time 
 */
lnn.parser.consume_date = function (field, line) {
    let words = line.split(" ")
    lnn.parser.check_format(3, field, words)

    if (!lnn.parser.is_valid_date(words[1])) throw `Invalid date: ${words[1]} is not a valid date`
    if (!lnn.parser.is_valid_time(words[2])) throw `Invalid time: ${words[2]} is not a valid time`

    return {
        "date": words[1],
        "time": words[2]
    }
}

/**
* Consume the lines of protocols composed by ranges
* @param {string} type either protocols or proto
* @param {Array} lines the raw file split by '\n'
* @param {Number} index the index of the line
* @param {object} node the node we want to update
* @returns the updated node
*/
lnn.parser.consume_proto = function (type, lines, index, node) {
    lnn.parser.check_reused(type, node)
    let ranges = lines[index].split(" ").splice(1)
    node[type] = lnn.parser.parse_range(ranges)
    return node
}

/**
 * Check if the field has already been parsed for the descriptor
 * @param {string} field the field we want to verify
 * @param {object} node the node for which we don't want a repetition of field
 */
lnn.parser.check_reused = function (field, node) {
    if (node[field] !== undefined) throw `The field ${field} appears more than once`
}

/**
 * Add the ending = for a base64 string
 * @param {string} str the string we want to modify
 * @returns {string} base 64 string with correct ending = 
 */
lnn.parser.add_ending = function (str) {
    if (str.length % 4 !== 0) {
        let rem = str.length % 4
        for (let i = 0; i < 4 - rem; i++) str += '='
    }
    return str
}






lnn.path = {}

/**
 * This function selects a lnn.path from the parsed consensus and parsed descriptors
 * Flavor is 'unflavored'
 * 
 * @param {Object} consensus a parsed consensus
 * @param {Object} descriptors parsed descriptors of the routers in the consensus
 * @param {Bool} isChutney boolean used to indicate if the lnn.path selection is done with routers from chutney
 */
lnn.path.select = function (consensus, descriptors, isChutney) {
    if(isChutney === undefined){
        lnn.path["isChutney"] = false
    }else{
        lnn.path["isChutney"] = isChutney
    }

    //build a hashmap of descriptor where the keys are the identity
    lnn.path["descriptorsMap"] = {}

    for (let descriptor of descriptors) {
        let identity = descriptor['router'].identity
        lnn.path.descriptorsMap[identity] = descriptor
    }

    //pre-process consensus by filering the routers that do not obey
    //the minimal constraints
    lnn.path["consensus"] = consensus['routers'].filter(r => lnn.path.obeyMinimalConstraints(r))
    
    //lnn.path selection
    lnn.path["exit"] = lnn.path.chooseGoodExit(consensus)
    lnn.path["guard"] = lnn.path.chooseGoodGuard(consensus)
    lnn.path["middle"] = lnn.path.chooseGoodMiddle(consensus)

    //TODO: it should create/return a new lnn.path and not the descriptors
    return [lnn.path.guard, lnn.path.middle, lnn.path.exit]
}

//assumes microdesc flavor.
lnn.path.select_end_path = function (consensus, descriptors,guard, isChutney, tcp_ports) {
    if(isChutney === undefined){
        lnn.path["isChutney"] = false
    }else{
        lnn.path["isChutney"] = isChutney
    }

    //build a hashmap of descriptor where the keys are the identity
    let consMap = {}
    for(let router of consensus['routers']) {
        consMap[router['micro-digest']] = router
    }

    lnn.path["descriptorsMap"] = {}

    for (let descriptor of descriptors) {
        descriptor['router'] = consMap[descriptor['micro-digest']]
        descriptor['bandwidth'] = {}
        descriptor['bandwidth']['avg'] = descriptor['router']['w']['Bandwidth']

        let identity = descriptor['router'].identity
        lnn.path.descriptorsMap[identity] = descriptor
    }

    //pre-process consensus by filering the routers that do not obey
    //the minimal constraints
    console.log(consensus['routers'].length)
    console.log(descriptors.length)
    lnn.path["consensus"] = consensus['routers'].filter(r => lnn.path.obeyMinimalConstraints(r))
    console.log(lnn.path["consensus"].length)

    //lnn.path selection
    lnn.path["guard"] = guard
    lnn.path["exit"] = lnn.path.chooseGoodExitGivenGuard(tcp_ports)
    lnn.path["middle"] = lnn.path.chooseGoodMiddle()

    //TODO: it should create/return a new lnn.path and not the descriptors
    return [lnn.path.middle, lnn.path.exit]
}

/**
 * This function checks if the given router obeys the minimal constraints needed for a router to be selected
 * 
 * @param {Object} router the router subpart of one of the nodes of the parsed consensus
 */
lnn.path.obeyMinimalConstraints = function (router) {
    let des = lnn.path.descriptorsMap[router['identity']]
    let flags = router['flags']
    
    if(des === undefined) return false
    if (!flags.includes("Valid")) return false
    if (!flags.includes("Running")) return false
    if (!router['version'].startsWith("Tor 0.3.")) return false

    if (des['identity']['type'] !== 'ed25519') return false

    return true
}

/**
 * This function takes candidates and choose one at random weighted by its bandwidth average
 * 
 * @param {Array} candidates the list of candidates
 */

lnn.path.weightedRandomChoice = function (candidates) {
    let total = 0
    
    for(let candidate of candidates){
        let des =lnn.path.descriptorsMap[candidate['identity']]
        if(des !== undefined){
            total += des['bandwidth']['avg']
        }
    }
    
    let r = Math.random() * total
    let upto = 0

    for (let router of candidates) {
        let des = lnn.path.descriptorsMap[router['identity']]

        if(des !== undefined){
            let bandwidth = des['bandwidth']['avg']

            if (upto + bandwidth >= r) return des
            else upto += bandwidth
        }
        
    }

    throw "No candidate has been chosen"
}

/**
 * This function checks if 2 routers are part of the same 16-subnet
 * 
 * @param {Object} des1 the descriptor of the first router
 * @param {Object} des2 the descriptor of the second router
 * 
 */
lnn.path.inSame16Subnet = function (des1, des2) {

    if(lnn.path.isChutney){
        return false
    }

    let addr1 = des1['router']['address'].split(".")
    let addr2 = des2['router']['address'].split(".")

    return addr1[0] === addr2[0] && addr1[1] === addr2[1]
}

/**
 * This function checks if 2 routers are part of the same family
 * 
 * @param {Object} des1 the descriptor of the first router
 * @param {Object} des2 the descriptor of the second router
 */
lnn.path.inSameFamily = function (des1, des2) {
    if (des1['family'] != undefined && des2['family'] != undefined) {
        for (let fam of des1['family']) {
            if (des2['family'].includes(fam)) return true
        }
    }

    return false
}

/**
 * This function choose a good exit given the TOR lnn.path selection rules
 */
lnn.path.chooseGoodExit = function () {
    let candidates = lnn.path.consensus.filter(lnn.path.isGoodExit)
    return lnn.path.weightedRandomChoice(candidates)
}

lnn.path.chooseGoodExitGivenGuard = function (tcp_ports) {
    let candidates = lnn.path.consensus.filter(r => lnn.path.isGoodExitGivenGuard(r,tcp_ports))
    console.log("Exit candidates: " + candidates.length)
    return lnn.path.weightedRandomChoice(candidates)
}

/**
 * This function checks if the given router is a suitable candidate to become an exit
 * 
 * @param {Object} router the router subpart of one of the nodes of the parsed consensus
 */
lnn.path.isGoodExit = function (router) {
    let flags = router['flags']
    if (!flags.includes('Exit') || flags.includes('BadExit')) return false

    if(router['exit-policy'] === undefined ) 
        router['exit-policy'] = lnn.path.descriptorsMap[router.identity]['policy']
    if (router['exit-policy']['type'] !== 'accept') return false

    return true

}

lnn.path.isGoodExitGivenGuard = function (router, tcp_ports) {
    let flags = router['flags']
    if (!flags.includes('Exit') || flags.includes('BadExit')) return false
    let des = lnn.path.descriptorsMap[router.identity]
    

    if(router['exit-policy'] === undefined ) 
        router['exit-policy'] = des['policy']

    let port_arr = router['exit-policy']['PortList']
    for(i = 0; i < tcp_ports.length; i++) {
        let found = false
        let cur_port = tcp_ports[i]

        for(j = 0; j < port_arr.length; j++) {
            if(port_arr[j][0] == cur_port) {
                found = true
                break
            }
            else if(port_arr[j].length == 2){
                if(port_arr[j][0] <= cur_port && cur_port <= port_arr[j][1]) {
                    found = true
                    break
                }
            }
        }

        if(router['exit-policy']['type'] == 'accept') {
            if(!found) return false
        } 
        else {
            if(found) return false
        }
    }

    if(des === undefined){
        return false
    }

    if(des["router"]["identity"] === lnn.path.guard["router"]["identity"]){
        return false
    }

    if (lnn.path.inSame16Subnet(des, lnn.path.guard)) return false
    if (lnn.path.inSameFamily(des, lnn.path.guard)) return false

    return true
}

/**
 * This function choose a good guard given the TOR lnn.path selection rules.
 * 
 * Note:    this implements a lightweight version of the TOR lnn.path selection, where the selection based on the different
 *          sets is put aside
 * 
 */
lnn.path.chooseGoodGuard = function () {
    let candidates = lnn.path.consensus.filter(r => lnn.path.isGoodGuard(r))
    return lnn.path.weightedRandomChoice(candidates)
}

/**
 * This function checks if the given router is a suitable candidate to become a guard
 * 
 * @param {Object} router the router subpart of one of the nodes of the parsed consensus
 */
lnn.path.isGoodGuard = function (router) {
    let flags = router['flags']
    let des = lnn.path.descriptorsMap[router.identity]

    if(des === undefined){
        return false
    }

    if(des["router"]["identity"] === lnn.path.exit["router"]["identity"]){
        return false
    }

    if (!flags.includes('Guard')) return false
    if (!flags.includes('Stable')) return false
    if (!flags.includes('V2Dir')) return false
    if (lnn.path.inSame16Subnet(des, lnn.path.exit)) return false
    if (lnn.path.inSameFamily(des, lnn.path.exit)) return false

    return true
}

/**
 * This function choose a good middle given the TOR lnn.path selection rules
 */
lnn.path.chooseGoodMiddle = function () {
    let candidates = lnn.path.consensus.filter(r => lnn.path.isGoodMiddle(r))
    return lnn.path.weightedRandomChoice(candidates)
}

/**
 * This function checks if the given router is a suitable candidate to become a middle node
 * 
 * @param {Object} router the router subpart of one of the nodes of the parsed consensus
 */
lnn.path.isGoodMiddle = function (router) {
    let des = lnn.path.descriptorsMap[router.identity]

    if(des === undefined){
        return false
    }

    if(des["router"]["identity"] === lnn.path.exit["router"]["identity"] ||des["router"]["identity"] === lnn.path.guard["router"]["identity"]){
        return false
    }

    if (lnn.path.inSame16Subnet(des, lnn.path.guard)) return false
    if (lnn.path.inSame16Subnet(des, lnn.path.exit)) return false
    if (lnn.path.inSameFamily(des, lnn.path.guard)) return false
    if (lnn.path.inSameFamily(des, lnn.path.exit)) return false

    return true
}

window['lnn'] = lnn
