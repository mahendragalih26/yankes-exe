PGDMP     %    2            
    z            yankes    15.0    15.0                0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false                       0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false                       1262    16412    yankes    DATABASE     }   CREATE DATABASE yankes WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'English_Indonesia.1252';
    DROP DATABASE yankes;
                postgres    false            ?            1259    16422    pasien    TABLE     ?   CREATE TABLE public.pasien (
    pasienid integer NOT NULL,
    pasienname character varying(255) NOT NULL,
    pasienage integer NOT NULL,
    pasiengender character varying(255) NOT NULL
);
    DROP TABLE public.pasien;
       public         heap    postgres    false            ?            1259    16421    pasien_pasienid_seq    SEQUENCE     ?   CREATE SEQUENCE public.pasien_pasienid_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE public.pasien_pasienid_seq;
       public          postgres    false    215                       0    0    pasien_pasienid_seq    SEQUENCE OWNED BY     K   ALTER SEQUENCE public.pasien_pasienid_seq OWNED BY public.pasien.pasienid;
          public          postgres    false    214            ?            1259    16465    review    TABLE     ?   CREATE TABLE public.review (
    id integer NOT NULL,
    rate character varying(40),
    date timestamp without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);
    DROP TABLE public.review;
       public         heap    postgres    false            ?            1259    16464    review_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.review_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 $   DROP SEQUENCE public.review_id_seq;
       public          postgres    false    219                       0    0    review_id_seq    SEQUENCE OWNED BY     ?   ALTER SEQUENCE public.review_id_seq OWNED BY public.review.id;
          public          postgres    false    218            ?            1259    16438    students    TABLE     ?   CREATE TABLE public.students (
    id integer NOT NULL,
    firstname character varying(40),
    lastname character varying(40),
    origin character varying(50)
);
    DROP TABLE public.students;
       public         heap    postgres    false            ?            1259    16437    students_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.students_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.students_id_seq;
       public          postgres    false    217                       0    0    students_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.students_id_seq OWNED BY public.students.id;
          public          postgres    false    216            o           2604    16425    pasien pasienid    DEFAULT     r   ALTER TABLE ONLY public.pasien ALTER COLUMN pasienid SET DEFAULT nextval('public.pasien_pasienid_seq'::regclass);
 >   ALTER TABLE public.pasien ALTER COLUMN pasienid DROP DEFAULT;
       public          postgres    false    214    215    215            q           2604    16468 	   review id    DEFAULT     f   ALTER TABLE ONLY public.review ALTER COLUMN id SET DEFAULT nextval('public.review_id_seq'::regclass);
 8   ALTER TABLE public.review ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    219    218    219            p           2604    16441    students id    DEFAULT     j   ALTER TABLE ONLY public.students ALTER COLUMN id SET DEFAULT nextval('public.students_id_seq'::regclass);
 :   ALTER TABLE public.students ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    216    217    217                      0    16422    pasien 
   TABLE DATA           O   COPY public.pasien (pasienid, pasienname, pasienage, pasiengender) FROM stdin;
    public          postgres    false    215   ?                 0    16465    review 
   TABLE DATA           0   COPY public.review (id, rate, date) FROM stdin;
    public          postgres    false    219   ?       
          0    16438    students 
   TABLE DATA           C   COPY public.students (id, firstname, lastname, origin) FROM stdin;
    public          postgres    false    217   k                  0    0    pasien_pasienid_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public.pasien_pasienid_seq', 5, true);
          public          postgres    false    214                       0    0    review_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public.review_id_seq', 11, true);
          public          postgres    false    218                       0    0    students_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.students_id_seq', 5, true);
          public          postgres    false    216            t           2606    16429    pasien pasien_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.pasien
    ADD CONSTRAINT pasien_pkey PRIMARY KEY (pasienid);
 <   ALTER TABLE ONLY public.pasien DROP CONSTRAINT pasien_pkey;
       public            postgres    false    215            x           2606    16471    review review_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public.review
    ADD CONSTRAINT review_pkey PRIMARY KEY (id);
 <   ALTER TABLE ONLY public.review DROP CONSTRAINT review_pkey;
       public            postgres    false    219            v           2606    16443    students students_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.students
    ADD CONSTRAINT students_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.students DROP CONSTRAINT students_pkey;
       public            postgres    false    217               0   x?3??,IT0?4?w??q?2?1?1?1?,I-?4?qc???? ??            x?uϷ?P?Z?????????òK?? R7?L?v?]??X??Ж&?p?Y?\?&?p.??&?K?+?t.?Fq???+?T?r,1>??r?WNT???Ov.????c?HX??c>??|??`"???>?      
   .   x?3?4B#.#Ø311??$??1???? .S??	L"F??? S??     