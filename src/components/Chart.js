import React, { PureComponent } from 'react';
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    Tooltip,
    Legend
} from "recharts";

const data = [
    {
      "Fecha": "1/22/20",
      "Casos": 0
    },
    {
      "Fecha": "1/23/20",
      "Casos": 0
    },
    {
      "Fecha": "1/24/20",
      "Casos": 0
    },
    {
      "Fecha": "1/25/20",
      "Casos": 0
    },
    {
      "Fecha": "1/26/20",
      "Casos": 0
    },
    {
      "Fecha": "1/27/20",
      "Casos": 0
    },
    {
      "Fecha": "1/28/20",
      "Casos": 0
    },
    {
      "Fecha": "1/29/20",
      "Casos": 0
    },
    {
      "Fecha": "1/30/20",
      "Casos": 0
    },
    {
      "Fecha": "1/31/20",
      "Casos": 0
    },
    {
      "Fecha": "2/1/20",
      "Casos": 0
    },
    {
      "Fecha": "2/2/20",
      "Casos": 0
    },
    {
      "Fecha": "2/3/20",
      "Casos": 0
    },
    {
      "Fecha": "2/4/20",
      "Casos": 0
    },
    {
      "Fecha": "2/5/20",
      "Casos": 0
    },
    {
      "Fecha": "2/6/20",
      "Casos": 0
    },
    {
      "Fecha": "2/7/20",
      "Casos": 0
    },
    {
      "Fecha": "2/8/20",
      "Casos": 0
    },
    {
      "Fecha": "2/9/20",
      "Casos": 0
    },
    {
      "Fecha": "2/10/20",
      "Casos": 0
    },
    {
      "Fecha": "2/11/20",
      "Casos": 0
    },
    {
      "Fecha": "2/12/20",
      "Casos": 0
    },
    {
      "Fecha": "2/13/20",
      "Casos": 0
    },
    {
      "Fecha": "2/14/20",
      "Casos": 0
    },
    {
      "Fecha": "2/15/20",
      "Casos": 0
    },
    {
      "Fecha": "2/16/20",
      "Casos": 0
    },
    {
      "Fecha": "2/17/20",
      "Casos": 0
    },
    {
      "Fecha": "2/18/20",
      "Casos": 0
    },
    {
      "Fecha": "2/19/20",
      "Casos": 0
    },
    {
      "Fecha": "2/20/20",
      "Casos": 0
    },
    {
      "Fecha": "2/21/20",
      "Casos": 0
    },
    {
      "Fecha": "2/22/20",
      "Casos": 0
    },
    {
      "Fecha": "2/23/20",
      "Casos": 0
    },
    {
      "Fecha": "2/24/20",
      "Casos": 0
    },
    {
      "Fecha": "2/25/20",
      "Casos": 0
    },
    {
      "Fecha": "2/26/20",
      "Casos": 0
    },
    {
      "Fecha": "2/27/20",
      "Casos": 0
    },
    {
      "Fecha": "2/28/20",
      "Casos": 0
    },
    {
      "Fecha": "2/29/20",
      "Casos": 0
    },
    {
      "Fecha": "3/1/20",
      "Casos": 0
    },
    {
      "Fecha": "3/2/20",
      "Casos": 0
    },
    {
      "Fecha": "3/3/20",
      "Casos": 0
    },
    {
      "Fecha": "3/4/20",
      "Casos": 0
    },
    {
      "Fecha": "3/5/20",
      "Casos": 0
    },
    {
      "Fecha": "3/6/20",
      "Casos": 1
    },
    {
      "Fecha": "3/7/20",
      "Casos": 1
    },
    {
      "Fecha": "3/8/20",
      "Casos": 1
    },
    {
      "Fecha": "3/9/20",
      "Casos": 1
    },
    {
      "Fecha": "3/10/20",
      "Casos": 3
    },
    {
      "Fecha": "3/11/20",
      "Casos": 9
    },
    {
      "Fecha": "3/12/20",
      "Casos": 9
    },
    {
      "Fecha": "3/13/20",
      "Casos": 13
    },
    {
      "Fecha": "3/14/20",
      "Casos": 22
    },
    {
      "Fecha": "3/15/20",
      "Casos": 34
    },
    {
      "Fecha": "3/16/20",
      "Casos": 57
    },
    {
      "Fecha": "3/17/20",
      "Casos": 75
    },
    {
      "Fecha": "3/18/20",
      "Casos": 102
    },
    {
      "Fecha": "3/19/20",
      "Casos": 108
    },
    {
      "Fecha": "3/20/20",
      "Casos": 158
    },
    {
      "Fecha": "3/21/20",
      "Casos": 196
    },
    {
      "Fecha": "3/22/20",
      "Casos": 231
    },
    {
      "Fecha": "3/23/20",
      "Casos": 277
    },
    {
      "Fecha": "3/24/20",
      "Casos": 378
    },
    {
      "Fecha": "3/25/20",
      "Casos": 470
    },
    {
      "Fecha": "3/26/20",
      "Casos": 491
    },
    {
      "Fecha": "3/27/20",
      "Casos": 539
    },
    {
      "Fecha": "3/28/20",
      "Casos": 608
    },
    {
      "Fecha": "3/29/20",
      "Casos": 702
    },
    {
      "Fecha": "3/30/20",
      "Casos": 798
    },
    {
      "Fecha": "3/31/20",
      "Casos": 906
    },
    {
      "Fecha": "4/1/20",
      "Casos": 1065
    },
    {
      "Fecha": "4/2/20",
      "Casos": 1161
    },
    {
      "Fecha": "4/3/20",
      "Casos": 1267
    },
    {
      "Fecha": "4/4/20",
      "Casos": 1406
    },
    {
      "Fecha": "4/5/20",
      "Casos": 1485
    },
    {
      "Fecha": "4/6/20",
      "Casos": 1579
    },
    {
      "Fecha": "4/7/20",
      "Casos": 1780
    },
    {
      "Fecha": "4/8/20",
      "Casos": 2054
    },
    {
      "Fecha": "4/9/20",
      "Casos": 2223
    },
    {
      "Fecha": "4/10/20",
      "Casos": 2473
    },
    {
      "Fecha": "4/11/20",
      "Casos": 2709
    },
    {
      "Fecha": "4/12/20",
      "Casos": 2776
    },
    {
      "Fecha": "4/13/20",
      "Casos": 2852
    },
    {
      "Fecha": "4/14/20",
      "Casos": 2979
    },
    {
      "Fecha": "4/15/20",
      "Casos": 3105
    },
    {
      "Fecha": "4/16/20",
      "Casos": 3233
    },
    {
      "Fecha": "4/17/20",
      "Casos": 3439
    },
    {
      "Fecha": "4/18/20",
      "Casos": 3621
    },
    {
      "Fecha": "4/19/20",
      "Casos": 3792
    },
    {
      "Fecha": "4/20/20",
      "Casos": 3977
    },
    {
      "Fecha": "4/21/20",
      "Casos": 4149
    },
    {
      "Fecha": "4/22/20",
      "Casos": 4356
    },
    {
      "Fecha": "4/23/20",
      "Casos": 4561
    },
    {
      "Fecha": "4/24/20",
      "Casos": 4881
    },
    {
      "Fecha": "4/25/20",
      "Casos": 5142
    },
    {
      "Fecha": "4/26/20",
      "Casos": 5379
    },
    {
      "Fecha": "4/27/20",
      "Casos": 5597
    },
    {
      "Fecha": "4/28/20",
      "Casos": 5949
    },
    {
      "Fecha": "4/29/20",
      "Casos": 6207
    },
    {
      "Fecha": "4/30/20",
      "Casos": 6507
    },
    {
      "Fecha": "5/1/20",
      "Casos": 7006
    },
    {
      "Fecha": "5/2/20",
      "Casos": 7285
    },
    {
      "Fecha": "5/3/20",
      "Casos": 7668
    },
    {
      "Fecha": "5/4/20",
      "Casos": 7973
    },
    {
      "Fecha": "5/5/20",
      "Casos": 8613
    },
    {
      "Fecha": "5/6/20",
      "Casos": 8959
    },
    {
      "Fecha": "5/7/20",
      "Casos": 9456
    },
    {
      "Fecha": "5/8/20",
      "Casos": 10051
    },
    {
      "Fecha": "5/9/20",
      "Casos": 10495
    },
    {
      "Fecha": "5/10/20",
      "Casos": 11063
    },
    {
      "Fecha": "5/11/20",
      "Casos": 11613
    },
    {
      "Fecha": "5/12/20",
      "Casos": 12272
    },
    {
      "Fecha": "5/13/20",
      "Casos": 12930
    },
    {
      "Fecha": "5/14/20",
      "Casos": 13610
    },
    {
      "Fecha": "5/15/20",
      "Casos": 14216
    },
    {
      "Fecha": "5/16/20",
      "Casos": 14939
    },
    {
      "Fecha": "5/17/20",
      "Casos": 15574
    },
    {
      "Fecha": "5/18/20",
      "Casos": 16295
    },
    {
      "Fecha": "5/19/20",
      "Casos": 16935
    },
    {
      "Fecha": "5/20/20",
      "Casos": 17687
    },
    {
      "Fecha": "5/21/20",
      "Casos": 18330
    },
    {
      "Fecha": "5/22/20",
      "Casos": 19131
    },
    {
      "Fecha": "5/23/20",
      "Casos": 20177
    },
    {
      "Fecha": "5/24/20",
      "Casos": 21175
    },
    {
      "Fecha": "5/25/20",
      "Casos": 21981
    },
    {
      "Fecha": "5/26/20",
      "Casos": 23003
    },
    {
      "Fecha": "5/27/20",
      "Casos": 24104
    },
    {
      "Fecha": "5/28/20",
      "Casos": 25366
    },
    {
      "Fecha": "5/29/20",
      "Casos": 26688
    },
    {
      "Fecha": "5/30/20",
      "Casos": 28236
    },
    {
      "Fecha": "5/31/20",
      "Casos": 29383
    },
    {
      "Fecha": "6/1/20",
      "Casos": 30493
    },
    {
      "Fecha": "6/2/20",
      "Casos": 31833
    },
    {
      "Fecha": "6/3/20",
      "Casos": 33354
    },
    {
      "Fecha": "6/4/20",
      "Casos": 35120
    },
    {
      "Fecha": "6/5/20",
      "Casos": 36635
    },
    {
      "Fecha": "6/6/20",
      "Casos": 38027
    },
    {
      "Fecha": "6/7/20",
      "Casos": 39236
    },
    {
      "Fecha": "6/8/20",
      "Casos": 40719
    },
    {
      "Fecha": "6/9/20",
      "Casos": 42078
    },
    {
      "Fecha": "6/10/20",
      "Casos": 43682
    },
    {
      "Fecha": "6/11/20",
      "Casos": 45212
    },
    {
      "Fecha": "6/12/20",
      "Casos": 46858
    },
    {
      "Fecha": "6/13/20",
      "Casos": 48746
    },
    {
      "Fecha": "6/14/20",
      "Casos": 50939
    },
    {
      "Fecha": "6/15/20",
      "Casos": 53063
    },
    {
      "Fecha": "6/16/20",
      "Casos": 54931
    },
    {
      "Fecha": "6/17/20",
      "Casos": 57046
    },
    {
      "Fecha": "6/18/20",
      "Casos": 60217
    },
    {
      "Fecha": "6/19/20",
      "Casos": 63276
    },
    {
      "Fecha": "6/20/20",
      "Casos": 65633
    },
    {
      "Fecha": "6/21/20",
      "Casos": 68652
    },
    {
      "Fecha": "6/22/20",
      "Casos": 71183
    },
    {
      "Fecha": "6/23/20",
      "Casos": 73572
    },
    {
      "Fecha": "6/24/20",
      "Casos": 77113
    },
    {
      "Fecha": "6/25/20",
      "Casos": 80599
    },
    {
      "Fecha": "6/26/20",
      "Casos": 84442
    },
    {
      "Fecha": "6/27/20",
      "Casos": 88591
    },
    {
      "Fecha": "6/28/20",
      "Casos": 91769
    },
    {
      "Fecha": "6/29/20",
      "Casos": 95043
    },
    {
      "Fecha": "6/30/20",
      "Casos": 97846
    },
    {
      "Fecha": "7/1/20",
      "Casos": 102009
    },
    {
      "Fecha": "7/2/20",
      "Casos": 106110
    },
    {
      "Fecha": "7/3/20",
      "Casos": 109505
    },
    {
      "Fecha": "7/4/20",
      "Casos": 113389
    },
    {
      "Fecha": "7/5/20",
      "Casos": 117110
    },
    {
      "Fecha": "7/6/20",
      "Casos": 120281
    },
    {
      "Fecha": "7/7/20",
      "Casos": 124494
    },
    {
      "Fecha": "7/8/20",
      "Casos": 128638
    },
    {
      "Fecha": "7/9/20",
      "Casos": 133973
    },
    {
      "Fecha": "7/10/20",
      "Casos": 140776
    },
    {
      "Fecha": "7/11/20",
      "Casos": 145632
    },
    {
      "Fecha": "7/12/20",
      "Casos": 150445
    },
    {
      "Fecha": "7/13/20",
      "Casos": 154277
    },
    {
      "Fecha": "7/14/20",
      "Casos": 159898
    },
    {
      "Fecha": "7/15/20",
      "Casos": 165169
    },
    {
      "Fecha": "7/16/20",
      "Casos": 173206
    },
    {
      "Fecha": "7/17/20",
      "Casos": 182140
    },
    {
      "Fecha": "7/18/20",
      "Casos": 190700
    },
    {
      "Fecha": "7/19/20",
      "Casos": 197278
    },
    {
      "Fecha": "7/20/20",
      "Casos": 204005
    },
    {
      "Fecha": "7/21/20",
      "Casos": 211038
    },
    {
      "Fecha": "7/22/20",
      "Casos": 218428
    },
    {
      "Fecha": "7/23/20",
      "Casos": 226373
    },
    {
      "Fecha": "7/24/20",
      "Casos": 233541
    },
    {
      "Fecha": "7/25/20",
      "Casos": 240795
    },
    {
      "Fecha": "7/26/20",
      "Casos": 248976
    },
    {
      "Fecha": "7/27/20",
      "Casos": 257101
    },
    {
      "Fecha": "7/28/20",
      "Casos": 267385
    },
    {
      "Fecha": "7/29/20",
      "Casos": 276055
    },
    {
      "Fecha": "7/30/20",
      "Casos": 286020
    },
    {
      "Fecha": "7/31/20",
      "Casos": 295508
    },
    {
      "Fecha": "8/1/20",
      "Casos": 306181
    },
    {
      "Fecha": "8/2/20",
      "Casos": 317651
    },
    {
      "Fecha": "8/3/20",
      "Casos": 327850
    },
    {
      "Fecha": "8/4/20",
      "Casos": 334979
    },
    {
      "Fecha": "8/5/20",
      "Casos": 345714
    },
    {
      "Fecha": "8/6/20",
      "Casos": 357710
    },
    {
      "Fecha": "8/7/20",
      "Casos": 367204
    },
    {
      "Fecha": "8/8/20",
      "Casos": 376870
    },
    {
      "Fecha": "8/9/20",
      "Casos": 387481
    },
    {
      "Fecha": "8/10/20",
      "Casos": 397623
    },
    {
      "Fecha": "8/11/20",
      "Casos": 410453
    },
    {
      "Fecha": "8/12/20",
      "Casos": 422519
    },
    {
      "Fecha": "8/13/20",
      "Casos": 433805
    },
    {
      "Fecha": "8/14/20",
      "Casos": 445111
    },
    {
      "Fecha": "8/15/20",
      "Casos": 456689
    },
    {
      "Fecha": "8/16/20",
      "Casos": 468332
    },
    {
      "Fecha": "8/17/20",
      "Casos": 476660
    },
    {
      "Fecha": "8/18/20",
      "Casos": 489122
    },
    {
      "Fecha": "8/19/20",
      "Casos": 502178
    },
    {
      "Fecha": "8/20/20",
      "Casos": 513719
    },
    {
      "Fecha": "8/21/20",
      "Casos": 522138
    },
    {
      "Fecha": "8/22/20",
      "Casos": 533103
    },
    {
      "Fecha": "8/23/20",
      "Casos": 541139
    },
    {
      "Fecha": "8/24/20",
      "Casos": 551688
    },
    {
      "Fecha": "8/25/20",
      "Casos": 562113
    },
    {
      "Fecha": "8/26/20",
      "Casos": 572243
    },
    {
      "Fecha": "8/27/20",
      "Casos": 581995
    },
    {
      "Fecha": "8/28/20",
      "Casos": 590492
    },
    {
      "Fecha": "8/29/20",
      "Casos": 599884
    },
    {
      "Fecha": "8/30/20",
      "Casos": 607904
    },
    {
      "Fecha": "8/31/20",
      "Casos": 615094
    },
    {
      "Fecha": "9/1/20",
      "Casos": 624026
    },
    {
      "Fecha": "9/2/20",
      "Casos": 633321
    },
    {
      "Fecha": "9/3/20",
      "Casos": 641574
    },
    {
      "Fecha": "9/4/20",
      "Casos": 650063
    },
    {
      "Fecha": "9/5/20",
      "Casos": 658456
    },
    {
      "Fecha": "9/6/20",
      "Casos": 666521
    },
    {
      "Fecha": "9/7/20",
      "Casos": 671848
    },
    {
      "Fecha": "9/8/20",
      "Casos": 679513
    },
    {
      "Fecha": "9/9/20",
      "Casos": 686851
    },
    {
      "Fecha": "9/10/20",
      "Casos": 694664
    },
    {
      "Fecha": "9/11/20",
      "Casos": 702088
    },
    {
      "Fecha": "9/12/20",
      "Casos": 708964
    },
    {
      "Fecha": "9/13/20",
      "Casos": 716319
    },
    {
      "Fecha": "9/14/20",
      "Casos": 721892
    },
    {
      "Fecha": "9/15/20",
      "Casos": 728590
    },
    {
      "Fecha": "9/16/20",
      "Casos": 736377
    },
    {
      "Fecha": "9/17/20",
      "Casos": 743945
    },
    {
      "Fecha": "9/18/20",
      "Casos": 750471
    },
    {
      "Fecha": "9/19/20",
      "Casos": 758398
    },
    {
      "Fecha": "9/20/20",
      "Casos": 765076
    },
    {
      "Fecha": "9/21/20",
      "Casos": 770435
    },
    {
      "Fecha": "9/22/20",
      "Casos": 777537
    },
    {
      "Fecha": "9/23/20",
      "Casos": 784268
    },
    {
      "Fecha": "9/24/20",
      "Casos": 790823
    },
    {
      "Fecha": "9/25/20",
      "Casos": 798317
    },
    {
      "Fecha": "9/26/20",
      "Casos": 806038
    },
    {
      "Fecha": "9/27/20",
      "Casos": 813056
    },
    {
      "Fecha": "9/28/20",
      "Casos": 818203
    },
    {
      "Fecha": "9/29/20",
      "Casos": 824042
    },
    {
      "Fecha": "9/30/20",
      "Casos": 829679
    },
    {
      "Fecha": "10/1/20",
      "Casos": 835339
    },
    {
      "Fecha": "10/2/20",
      "Casos": 841532
    },
    {
      "Fecha": "10/3/20",
      "Casos": 848147
    },
    {
      "Fecha": "10/4/20",
      "Casos": 855052
    },
    {
      "Fecha": "10/5/20",
      "Casos": 862158
    },
    {
      "Fecha": "10/6/20",
      "Casos": 869808
    },
    {
      "Fecha": "10/7/20",
      "Casos": 877684
    },
    {
      "Fecha": "10/8/20",
      "Casos": 886179
    },
    {
      "Fecha": "10/9/20",
      "Casos": 894300
    },
    {
      "Fecha": "10/10/20",
      "Casos": 902747
    },
    {
      "Fecha": "10/11/20",
      "Casos": 911316
    },
    {
      "Fecha": "10/12/20",
      "Casos": 919084
    },
    {
      "Fecha": "10/13/20",
      "Casos": 924098
    },
    {
      "Fecha": "10/14/20",
      "Casos": 930159
    },
    {
      "Fecha": "10/15/20",
      "Casos": 936982
    },
    {
      "Fecha": "10/16/20",
      "Casos": 945354
    },
    {
      "Fecha": "10/17/20",
      "Casos": 952371
    },
    {
      "Fecha": "10/18/20",
      "Casos": 959572
    },
    {
      "Fecha": "10/19/20",
      "Casos": 965883
    },
    {
      "Fecha": "10/20/20",
      "Casos": 974139
    },
    {
      "Fecha": "10/21/20",
      "Casos": 981700
    },
    {
      "Fecha": "10/22/20",
      "Casos": 990373
    },
    {
      "Fecha": "10/23/20",
      "Casos": 998942
    },
    {
      "Fecha": "10/24/20",
      "Casos": 1007711
    },
    {
      "Fecha": "10/25/20",
      "Casos": 1015885
    },
    {
      "Fecha": "10/26/20",
      "Casos": 1025052
    },
    {
      "Fecha": "10/27/20",
      "Casos": 1033218
    },
    {
      "Fecha": "10/28/20",
      "Casos": 1041935
    },
    {
      "Fecha": "10/29/20",
      "Casos": 1053122
    },
    {
      "Fecha": "10/30/20",
      "Casos": 1063151
    },
    {
      "Fecha": "10/31/20",
      "Casos": 1074184
    },
    {
      "Fecha": "11/1/20",
      "Casos": 1083321
    },
    {
      "Fecha": "11/2/20",
      "Casos": 1093256
    },
    {
      "Fecha": "11/3/20",
      "Casos": 1099392
    },
    {
      "Fecha": "11/4/20",
      "Casos": 1108086
    },
    {
      "Fecha": "11/5/20",
      "Casos": 1117977
    },
    {
      "Fecha": "11/6/20",
      "Casos": 1127733
    },
    {
      "Fecha": "11/7/20",
      "Casos": 1136447
    },
    {
      "Fecha": "11/8/20",
      "Casos": 1143887
    },
    {
      "Fecha": "11/9/20",
      "Casos": 1149064
    },
    {
      "Fecha": "11/10/20",
      "Casos": 1155356
    },
    {
      "Fecha": "11/11/20",
      "Casos": 1165326
    },
    {
      "Fecha": "11/12/20",
      "Casos": 1174012
    },
    {
      "Fecha": "11/13/20",
      "Casos": 1182697
    },
    {
      "Fecha": "11/14/20",
      "Casos": 1191634
    },
    {
      "Fecha": "11/15/20",
      "Casos": 1198746
    },
    {
      "Fecha": "11/16/20",
      "Casos": 1205217
    },
    {
      "Fecha": "11/17/20",
      "Casos": 1211128
    },
    {
      "Fecha": "11/18/20",
      "Casos": 1218003
    },
    {
      "Fecha": "11/19/20",
      "Casos": 1225490
    },
    {
      "Fecha": "11/20/20",
      "Casos": 1233444
    },
    {
      "Fecha": "11/21/20",
      "Casos": 1240493
    },
    {
      "Fecha": "11/22/20",
      "Casos": 1248417
    },
    {
      "Fecha": "11/23/20",
      "Casos": 1254979
    },
    {
      "Fecha": "11/24/20",
      "Casos": 1262494
    },
    {
      "Fecha": "11/25/20",
      "Casos": 1270991
    },
    {
      "Fecha": "11/26/20",
      "Casos": 1280487
    },
    {
      "Fecha": "11/27/20",
      "Casos": 1290510
    },
    {
      "Fecha": "11/28/20",
      "Casos": 1299613
    },
    {
      "Fecha": "11/29/20",
      "Casos": 1308376
    },
    {
      "Fecha": "11/30/20",
      "Casos": 1316806
    },
    {
      "Fecha": "12/1/20",
      "Casos": 1324792
    },
    {
      "Fecha": "12/2/20",
      "Casos": 1334089
    },
    {
      "Fecha": "12/3/20",
      "Casos": 1343322
    },
    {
      "Fecha": "12/4/20",
      "Casos": 1352607
    },
    {
      "Fecha": "12/5/20",
      "Casos": 1362249
    },
    {
      "Fecha": "12/6/20",
      "Casos": 1371103
    },
    {
      "Fecha": "12/7/20",
      "Casos": 1377100
    },
    {
      "Fecha": "12/8/20",
      "Casos": 1384610
    },
    {
      "Fecha": "12/9/20",
      "Casos": 1392133
    },
    {
      "Fecha": "12/10/20",
      "Casos": 1399911
    },
    {
      "Fecha": "12/11/20",
      "Casos": 1408909
    },
    {
      "Fecha": "12/12/20",
      "Casos": 1417072
    },
    {
      "Fecha": "12/13/20",
      "Casos": 1425774
    },
    {
      "Fecha": "12/14/20",
      "Casos": 1434516
    },
    {
      "Fecha": "12/15/20",
      "Casos": 1444646
    },
    {
      "Fecha": "12/16/20",
      "Casos": 1456599
    },
    {
      "Fecha": "12/17/20",
      "Casos": 1468795
    },
    {
      "Fecha": "12/18/20",
      "Casos": 1482072
    },
    {
      "Fecha": "12/19/20",
      "Casos": 1496062
    },
    {
      "Fecha": "12/20/20",
      "Casos": 1507222
    },
    {
      "Fecha": "12/21/20",
      "Casos": 1518067
    },
    {
      "Fecha": "12/22/20",
      "Casos": 1530593
    },
    {
      "Fecha": "12/23/20",
      "Casos": 1544826
    },
    {
      "Fecha": "12/24/20",
      "Casos": 1559766
    },
    {
      "Fecha": "12/25/20",
      "Casos": 1574707
    },
    {
      "Fecha": "12/26/20",
      "Casos": 1584903
    },
    {
      "Fecha": "12/27/20",
      "Casos": 1594497
    },
    {
      "Fecha": "12/28/20",
      "Casos": 1603807
    },
    {
      "Fecha": "12/29/20",
      "Casos": 1614822
    },
    {
      "Fecha": "12/30    /20",
      "Casos": 1626461
    },
    {
      "Fecha": "12/31/20",
      "Casos": 1642775
    },
    {
      "Fecha": "1/1/21",
      "Casos": 1654880
    },
    {
      "Fecha": "1/2/21",
      "Casos": 1666408
    },
    {
      "Fecha": "1/3/21",
      "Casos": 1675820
    },
    {
      "Fecha": "1/4/21",
      "Casos": 1686131
    },
    {
      "Fecha": "1/5/21",
      "Casos": 1702966
    },
    {
      "Fecha": "1/6/21",
      "Casos": 1719771
    },
    {
      "Fecha": "1/7/21",
      "Casos": 1737347
    },
    {
      "Fecha": "1/8/21",
      "Casos": 1755568
    },
    {
      "Fecha": "1/9/21",
      "Casos": 1771363
    },
    {
      "Fecha": "1/10/21",
      "Casos": 1786900
    },
    {
      "Fecha": "1/11/21",
      "Casos": 1801903
    },
    {
      "Fecha": "1/12/21",
      "Casos": 1816082
    },
    {
      "Fecha": "1/13/21",
      "Casos": 1831980
    },
    {
      "Fecha": "1/14/21",
      "Casos": 1849101
    },
    {
      "Fecha": "1/15/21",
      "Casos": 1870179
    },
    {
      "Fecha": "1/16/21",
      "Casos": 1891034
    },
    {
      "Fecha": "1/17/21",
      "Casos": 1908413
    },
    {
      "Fecha": "1/18/21",
      "Casos": 1923132
    },
    {
      "Fecha": "1/19/21",
      "Casos": 1939071
    },
    {
      "Fecha": "1/20/21",
      "Casos": 1956979
    },
    {
      "Fecha": "1/21/21",
      "Casos": 1972345
    },
    {
      "Fecha": "1/22/21",
      "Casos": 1987418
    },
    {
      "Fecha": "1/23/21",
      "Casos": 2002969
    },
    {
      "Fecha": "1/24/21",
      "Casos": 2015485
    },
    {
      "Fecha": "1/25/21",
      "Casos": 2027746
    },
    {
      "Fecha": "1/26/21",
      "Casos": 2041352
    },
    {
      "Fecha": "1/27/21",
      "Casos": 2055305
    },
    {
      "Fecha": "1/28/21",
      "Casos": 2067575
    },
    {
      "Fecha": "1/29/21",
      "Casos": 2077633
    },
    {
      "Fecha": "1/30/21",
      "Casos": 2086806
    },
    {
      "Fecha": "1/31/21",
      "Casos": 2094884
    },
    {
      "Fecha": "2/1/21",
      "Casos": 2104506
    },
    {
      "Fecha": "2/2/21",
      "Casos": 2114597
    },
    {
      "Fecha": "2/3/21",
      "Casos": 2125622
    },
    {
      "Fecha": "2/4/21",
      "Casos": 2135412
    },
    {
      "Fecha": "2/5/21",
      "Casos": 2142660
    },
    {
      "Fecha": "2/6/21",
      "Casos": 2151207
    },
    {
      "Fecha": "2/7/21",
      "Casos": 2157216
    },
    {
      "Fecha": "2/8/21",
      "Casos": 2161462
    },
    {
      "Fecha": "2/9/21",
      "Casos": 2166904
    },
    {
      "Fecha": "2/10/21",
      "Casos": 2173347
    },
    {
      "Fecha": "2/11/21",
      "Casos": 2179641
    },
    {
      "Fecha": "2/12/21",
      "Casos": 2185169
    },
    {
      "Fecha": "2/13/21",
      "Casos": 2190116
    },
    {
      "Fecha": "2/14/21",
      "Casos": 2195039
    },
    {
      "Fecha": "2/15/21",
      "Casos": 2198549
    },
    {
      "Fecha": "2/16/21",
      "Casos": 2202598
    },
    {
      "Fecha": "2/17/21",
      "Casos": 2207701
    },
    {
      "Fecha": "2/18/21",
      "Casos": 2212525
    },
    {
      "Fecha": "2/19/21",
      "Casos": 2217001
    },
    {
      "Fecha": "2/20/21",
      "Casos": 2222018
    },
    {
      "Fecha": "2/21/21",
      "Casos": 2226262
    },
    {
      "Fecha": "2/22/21",
      "Casos": 2229663
    },
    {
      "Fecha": "2/23/21",
      "Casos": 2233589
    },
    {
      "Fecha": "2/24/21",
      "Casos": 2237542
    },
    {
      "Fecha": "2/25/21",
      "Casos": 2241225
    },
    {
      "Fecha": "2/26/21",
      "Casos": 2244792
    },
    {
      "Fecha": "2/27/21",
      "Casos": 2248135
    },
    {
      "Fecha": "2/28/21",
      "Casos": 2251690
    },
    {
      "Fecha": "3/1/21",
      "Casos": 2255260
    },
    {
      "Fecha": "3/2/21",
      "Casos": 2259599
    },
    {
      "Fecha": "3/3/21",
      "Casos": 2262646
    },
    {
      "Fecha": "3/4/21",
      "Casos": 2266211
    },
    {
      "Fecha": "3/5/21",
      "Casos": 2269582
    },
    {
      "Fecha": "3/6/21",
      "Casos": 2273245
    },
    {
      "Fecha": "3/7/21",
      "Casos": 2276656
    },
    {
      "Fecha": "3/8/21",
      "Casos": 2278861
    },
    {
      "Fecha": "3/9/21",
      "Casos": 2282372
    },
    {
      "Fecha": "3/10/21",
      "Casos": 2285960
    },
    {
      "Fecha": "3/11/21",
      "Casos": 2290539
    },
    {
      "Fecha": "3/12/21",
      "Casos": 2294617
    },
    {
      "Fecha": "3/13/21",
      "Casos": 2299082
    },
    {
      "Fecha": "3/14/21",
      "Casos": 2303144
    },
    {
      "Fecha": "3/15/21",
      "Casos": 2305884
    },
    {
      "Fecha": "3/16/21",
      "Casos": 2309600
    },
    {
      "Fecha": "3/17/21",
      "Casos": 2314154
    },
    {
      "Fecha": "3/18/21",
      "Casos": 2319293
    },
    {
      "Fecha": "3/19/21",
      "Casos": 2324426
    },
    {
      "Fecha": "3/20/21",
      "Casos": 2331187
    },
    {
      "Fecha": "3/21/21",
      "Casos": 2337230
    },
    {
      "Fecha": "3/22/21",
      "Casos": 2342278
    },
    {
      "Fecha": "3/23/21",
      "Casos": 2347224
    },
    {
      "Fecha": "3/24/21",
      "Casos": 2353210
    },
    {
      "Fecha": "3/25/21",
      "Casos": 2359942
    },
    {
      "Fecha": "3/26/21",
      "Casos": 2367337
    },
    {
      "Fecha": "3/27/21",
      "Casos": 2375591
    },
    {
      "Fecha": "3/28/21",
      "Casos": 2382730
    },
    {
      "Fecha": "3/29/21",
      "Casos": 2389779
    },
    {
      "Fecha": "3/30/21",
      "Casos": 2397731
    },
    {
      "Fecha": "3/31/21",
      "Casos": 2406377
    },
    {
      "Fecha": "4/1/21",
      "Casos": 2417826
    },
    {
      "Fecha": "4/2/21",
      "Casos": 2428048
    },
    {
      "Fecha": "4/3/21",
      "Casos": 2437197
    },
    {
      "Fecha": "4/4/21",
      "Casos": 2446219
    },
    {
      "Fecha": "4/5/21",
      "Casos": 2456409
    },
    {
      "Fecha": "4/6/21",
      "Casos": 2468236
    },
    {
      "Fecha": "4/7/21",
      "Casos": 2479617
    },
    {
      "Fecha": "4/8/21",
      "Casos": 2492081
    },
    {
      "Fecha": "4/9/21",
      "Casos": 2504206
    },
    {
      "Fecha": "4/10/21",
      "Casos": 2518715
    },
    {
      "Fecha": "4/11/21",
      "Casos": 2536198
    },
    {
      "Fecha": "4/12/21",
      "Casos": 2552937
    },
    {
      "Fecha": "4/13/21",
      "Casos": 2569314
    },
    {
      "Fecha": "4/14/21",
      "Casos": 2585801
    },
    {
      "Fecha": "4/15/21",
      "Casos": 2602719
    },
    {
      "Fecha": "4/16/21",
      "Casos": 2619422
    },
    {
      "Fecha": "4/17/21",
      "Casos": 2636076
    },
    {
      "Fecha": "4/18/21",
      "Casos": 2652947
    },
    {
      "Fecha": "4/19/21",
      "Casos": 2667136
    },
    {
      "Fecha": "4/20/21",
      "Casos": 2684101
    },
    {
      "Fecha": "4/21/21",
      "Casos": 2701313
    },
    {
      "Fecha": "4/22/21",
      "Casos": 2720619
    },
    {
      "Fecha": "4/23/21",
      "Casos": 2740544
    },
    {
      "Fecha": "4/24/21",
      "Casos": 2757274
    },
    {
      "Fecha": "4/25/21",
      "Casos": 2774464
    },
    {
      "Fecha": "4/26/21",
      "Casos": 2787303
    },
    {
      "Fecha": "4/27/21",
      "Casos": 2804881
    },
    {
      "Fecha": "4/28/21",
      "Casos": 2824626
    },
    {
      "Fecha": "4/29/21",
      "Casos": 2841934
    },
    {
      "Fecha": "4/30/21",
      "Casos": 2859724
    },
    {
      "Fecha": "5/1/21",
      "Casos": 2877746
    },
    {
      "Fecha": "5/2/21",
      "Casos": 2893655
    },
    {
      "Fecha": "5/3/21",
      "Casos": 2905254
    },
    {
      "Fecha": "5/4/21",
      "Casos": 2919805
    },
    {
      "Fecha": "5/5/21",
      "Casos": 2934611
    },
    {
      "Fecha": "5/6/21",
      "Casos": 2951101
    },
    {
      "Fecha": "5/7/21",
      "Casos": 2968626
    },
    {
      "Fecha": "5/8/21",
      "Casos": 2985536
    },
    {
      "Fecha": "5/9/21",
      "Casos": 3002758
    },
    {
      "Fecha": "5/10/21",
      "Casos": 3015301
    },
    {
      "Fecha": "5/11/21",
      "Casos": 3031726
    },
    {
      "Fecha": "5/12/21",
      "Casos": 3048719
    },
    {
      "Fecha": "5/13/21",
      "Casos": 3067879
    },
    {
      "Fecha": "5/14/21",
      "Casos": 3084460
    },
    {
      "Fecha": "5/15/21",
      "Casos": 3103333
    },
    {
      "Fecha": "5/16/21",
      "Casos": 3118426
    },
    {
      "Fecha": "5/17/21",
      "Casos": 3131410
    },
    {
      "Fecha": "5/18/21",
      "Casos": 3144547
    },
    {
      "Fecha": "5/19/21",
      "Casos": 3161126
    },
    {
      "Fecha": "5/20/21",
      "Casos": 3177212
    },
    {
      "Fecha": "5/21/21",
      "Casos": 3192050
    },
    {
      "Fecha": "5/22/21",
      "Casos": 3210787
    },
    {
      "Fecha": "5/23/21",
      "Casos": 3232456
    },
    {
      "Fecha": "5/24/21",
      "Casos": 3249433
    },
    {
      "Fecha": "5/25/21",
      "Casos": 3270614
    },
    {
      "Fecha": "5/26/21",
      "Casos": 3294101
    },
    {
      "Fecha": "5/27/21",
      "Casos": 3319193
    },
    {
      "Fecha": "5/28/21",
      "Casos": 3342567
    },
    {
      "Fecha": "5/29/21",
      "Casos": 3363061
    },
    {
      "Fecha": "5/30/21",
      "Casos": 3383279
    },
    {
      "Fecha": "5/31/21",
      "Casos": 3406456
    },
    {
      "Fecha": "6/1/21",
      "Casos": 3432422
    }
  ];

class Chart extends PureComponent {

    static demoUrl = 'https://codesandbox.io/s/simple-line-chart-kec3v';

    constructor(props) {
        super(props);
        this.state = {
            windowWidth: window.innerWidth,
            windowHeight: window.innerHeight
        };
    }

    handleResize = (e) => {
        this.setState({
            windowWidth: window.innerWidth,
            windowHeight: window.innerHeight
        });
    };

    componentDidMount() {
        window.addEventListener("resize", this.handleResize);
    }

    componentWillUnmount() {
        window.addEventListener("resize", this.handleResize);
    }


    render() {
        const { windowWidth, windowHeight } = this.state;
        return (
            <AreaChart
                width={windowWidth * 0.9}
                height={windowHeight * 0.22}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5
                }}>
                <XAxis dataKey="Fecha" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Area type="monotone" dataKey="Casos" stroke="#54428E" fill="#54428E" />
            </AreaChart>
        );
    }
}

export default Chart;