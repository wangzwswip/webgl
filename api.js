// 内置定点作色器变量
const gl_Position
const gl_PointSize

// 片元作色器内置变量
const gl_FragColor // 指定作色器颜色 vec4

// 存储限定符
attribute // 传输顶点相关数据
uniform // 传输所有顶点都一致的数据

// attribute vec4 a_Position
// 存储限定符 类型 变量名

/**
 * webgl 类型化数组
 * Int8Array  1字节  8位整型数
 * UInt8Array 1      8位无符号整型数
 * Int16Array  2
 * UInt16Array 2
 * Int32Array  4
 * UInt32Array 4
 * Float32Array 4   单精度
 * Float64Array 8    双精度
 * 
 */
// 类型化数组方法
get(index) // 获取第index个元素的值
set(Index, value)
set(array, offset) // 从第offset个元素开始将数组array中的值填充进去
length // 长度
BYTES_PER_ELEMENT // 数组中每个元素所占的字节数

// 方法
/**
 * 清空canvas
 */
gl.clear()
gl.drawArrays(gl.POINTS, 0 ,1)
/**
 * 绘制各种图形
 * mode 指定绘制方式 gl.POINTS, gl.LINES, gl.LINE_STRIP, gl.LINE_LOOP,
 * gl.TRIANGLES, gl.TRIANGLE_STRIP, gl.TRIANGLE_FAN
 * first 指定从那个定点开始绘制
 * count 指定绘制要用到多少个顶点
 */
gl.drawArrays(mode, first, count)

/**
 * 获取由name参数指定的attribute变量的存储地址
 * program 指定包含顶点作色器和片元作色器的程序对象
 * name 想要获得的attribute变量的名称
 */
gl.getAttribLocation(program, name)

/**
 * 获取uniform变量的存储位置
 */
gl.getUniformLocation(program, name)

/**
 * location 指定要修改的attribute变量的存储位置
 * v0 指定填充attribute变量第一个分量的值
 * v1 .....................第二个......
 * v2 .....................第三个......
 */
gl.vertexAttrib1f(location, v0)
gl.vertexAttrib2f(location, v0, v1)
gl.vertexAttrib3f(location, v0, v1, v2)
gl.vertexAttrib4f(location, v0, v1, v2, v3)


gl.uniform1f(location, v0)
gl.uniform2f(location, v0, v1)
gl.uniform3f(location, v0, v1, v2)
gl.uniform4f(location, v0, v1, v2, v3)
/**
 * webgl 函数命名规范
 * gl.vertexAttrib3f() 基础函数名+参数个数+参数类型{f: 浮点数，i: 整数}
 */

/**
 * 缓冲区对象
 * 1.创建缓冲区对象 gl.createBuffer()
 * 2.绑定缓冲区对象 gl.bindBuffer()
 * 3.将数据写入缓冲区对象 gl.bufferData()
 * 4.将缓冲区对象分配给一个attribute变量 gl.vertexAttribPointer()
 * 5.开启attribute变量 gl.enableVertexAttribArray()
 */
gl.createBuffer()
gl.deleteBuffer(buffer)

/**
 * target : gl.ARRAY_BUFFER (表示缓冲区对象包含了顶点的数据)
 *          gl.ELEMENT_ARRAY_BUFFER (表示缓冲区对象中包含了顶点的索引值)
 * buffer: 指定之前由gl.createBuffer()返回的待绑定的缓冲区对象
 */
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer)
gl.bindBuffer(target, buffer)

/**
 * 开辟存储空间，向绑定在target上的缓冲区对象中写入数据
 * data: 写入的数据
 * usage: 表示程序将如何使用存储在缓冲区对象中的数据，帮助webgl优化操作
 *    gl.STATIC_DRAW: 只会向缓冲区对象写入一次数据，但需要绘制很多次
 *    gl.STREAM_DRAW: 只会向缓冲区对象写入一次数据，然后绘制若干次
 *    gl.DYNAMIC_DRAW: 会向缓冲区对象中多次写入数据，并绘制很多次
 */
gl.bufferData(target, data, usage)

/**
 * 将绑定到gl.ARRAY_BUFFER的缓冲区对象分配给由location指定的attribute变量
 * location: 指定待分配attribute变量的存储位置
 * size：指定缓冲区每个顶点的分量个数（1到4）
 * type：用以下类型指定数据格式
 *    gl.UNSIGNED_BYTE 无符号字节 Uint8Array
 *    gl.SHORT 短整型 Int16Array
 *    gl.UNSIGNED_SHORT 无符号短整型 Uint16Array
 *    gl.INT  整型 Int32Array
 *    gl.UNSIGNED_INT 无符号整型 Uint32Array
 *    gl.FLOAT  浮点型 Float32Array
 * normalize 传入true或false，是否将非浮点型的数据归一化到[0,1] 或 [-1, 1]
 * stride 指定相邻两个顶点间的字节数
 * offset 指定缓冲区对象中的偏移量
 */
gl.vertexAttribPointer(a_Position, 2, gl.FLOAT, false, 0, 0)
gl.vertexAttribPointer(location, size, type, normalized, stride, offset)

/**
 * 开启location指定的attrribute变量
 */
gl.enableVertexAttribArray(a_Position)
gl.disableVertexArray(location)

/**
 * 执行顶点作色器，按照mode参数指定的方式绘制图形
 * mode: 绘制方式 gl.POINTS gl.LINES, gl.LINE_STRIP, gl.LINE_LOOP, gl.TRIANGLES,
 *               gl.TRIANGLE_STRIP, gl.TRIANGLE_FAN
 * first: 指定从那个顶点开始绘制
 * count: 指定绘制需要用到多少个顶点
 */
gl.drawArrays(mode, first, count)

/**
 * 将array表示的4*4矩阵分配给由location指定的uniform变量
 * location: uniform 变量存储位置
 * Transpose: 在webgl中必须指定为false
 * array: 待传输的类型化数组
 */
gl.uniformMatrix4fv(location, transpose, array)

/*****************配置和加载纹理************************ */
/**
 * 创建纹理对象以存储纹理图形
 */
gl.creatTexture()
gl.deleteTexture()

/**
 * 使用pname 和 param 指定的方式处理加载得到的图形
 * pname: 可以是gl.UNPACK_FLIP_Y_WEBGL 对图像进行Y轴反转  gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL 
 *        将图像RGB颜色值的每一个分量乘以A
 * param: 指定非0或0
 */
gl.pixelStorei(pname, param)
/**
 * 激活纹理单元 webgl支持8个，从TEXTURE0~7
 */
gl.activeTexture(gl.TEXTRUE0)

/**
 * 开启texture指定的纹理对象， 并将其绑定到target上
 */
gl.bindTexture(target, texture)
/**
 * 配置纹理对象参数，将param的值赋给绑定到目标的纹理对象的pname参数上
 * pname:  gl.TEXTURE_MAG_FILTER 纹理放大， gl.TEXTURE_MIN_FILTER 纹理缩小，  gl.TEXTURE_WRAP_S 纹理水平填充
 *          gl.TEXTURE_WRAP_T  纹理垂直填充
 * 170页
 */
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR)
gl.texParameteri(target, pname, param)

/**
 * 将纹理图形分配给纹理对象
 * target: gl.TEXTURE_2D或gl.TEXTURE_CUBE_MAP
 * level: 传入0， 该参数是为金字塔纹理准备的
 * internalformat: 图形的内部格式
 * format: 纹理的数据格式 jpg -> gl.RGB  PNG-> gl.RGBA BNP->gl.RGB
 * type: 纹理的数据类型
 * image: Image对象
 */
gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, image)
gl.texImage2D(target, level, internalformat, format, type, image)
/**
 * 专用于纹理对象的数据类型 sampler2D  samplerCube
 * 将0号纹理传递给着色器中的取样器变量
 */
gl.uniform1i(u_Sampler, 0)

/**
 * 片元着色器从纹理图像上获取纹素的颜色
 * sampler: 指定纹理单元编号
 * coord: 指定纹理坐标
 */
gl_FragColor = texture2D(u_Sampler, v_TexCoord)
vec4 texture2D(sampler2D sampler, vec2 coord)


// 作色器语言变量存储限定符
const // 常量
Attribute // 只能出现在顶点作色器，只能被声明为全局变量，被用来表示逐点信息，至少支持8个
uniform // 可以用在顶点和片元着色器上，必须是全局变量，声明为只读，可以是除了数组或结构体之外的任意类型，
        // 如果顶点和片元都声明了同名，则会共享，包含了一致的数据
varying // 必须全局，它的任务是从顶点作色器向片元作色器传递数据，必须在两种着色器中声明同名同类型的变量
        // 和attribute一样只能是float, vec2, vec3, vec4, mat2, mat3, mat4
// 精度限定词
// webgl支持三种精度， highp, mediump, lowp
// 除了片元着色器没有默认精度，需要指定，其他都已经有默认精度

/***********************三维 */
// 创建视图矩阵， 视点， 观察点， 指定上方向 （0，1，0）
Matrix4.setLookAt(eyeX, eyeY, eyeZ, atX, atY, atZ, upX, upY, upZ)
// 旋转矩阵 * 平移矩阵 =》 模型矩阵
// 视图矩阵 * 模型矩阵 =》 模型视图矩阵
// 可视空间 正射投影 透视投影 近剪裁面 远剪裁面
// 正射投影矩阵
// 正射投影矩阵 * 视图矩阵
// 隐藏面消除
gl.enable(gl.DEPTH_TEST) // 开启隐藏面消除功能
gl.clear(gl.DEPTH_BUFFER_BIT) // 清除深度缓冲区

/**
 * cap: 需要开启的功能， gl.DEPTH_TEST(隐藏面消除) gl.BLEND(混合) gl.POLYGON_OFFSET_FILL(多边形位移)
 */
gl.enable(cap)
gl.disable(cap)
/*************深度冲突 */
// webgl提供称为多边形偏移的机制来解决这个问题，自动在Z轴加上一个偏移量，偏移量的值由物体表面相对于
// 观察者视线的角度来确定
gl.enable(gl.POLYGON_FILL)
// 绘制前指定用来计算偏移量的参数
gl.polygonOffset(1.0, 1.0)

/**
 * 根据绑定到gl.ELEMENT_ARRAY_BUFFER的缓冲区中的定点索引值绘制图形
 * mode: gl.POINTS, gl.LINES, gl.LINE_STRIP, gl.LINE_LOOP, gl.TRIANGLES, gl.TRIANGLES_STRIP, gl.TRIANGLE_FAN
 * count: 指定绘制点的个数
 * type: 指定索引值数据类型，gl.UNSIGNED_BYTE或gl.UNSIGNED_SHORT
 * offset: 指定索引数组中开始绘制的位置
 */
gl.drawElements(mode, count, type, offset)

/********************光照************************** */
// 漫反射光颜色 = 入射光颜色 * 表面基地色
// 漫反射光颜色 = 入射光颜色 * 表面基地色
// 法向量乘以模型矩阵的逆转置矩阵，就可以求得变换后的法向量

/**
 * 通过各类参数计算透视投影矩阵，将其存储在Matrix4中，注意near值必须小于far
 * fov: 指定垂直视角，即可视空间底面和顶面的夹角，必须大于零
 * aspect: 指定近裁面的宽高比
 * near, far: 指定近裁面和远裁面的位置，及可视空间的近边界和远边界，必须大于零
 */
Matrix4.setPerspective(fov, aspect, near, far)

/**
 * 创建由type指定的着色器对象
 * type: 指定类型，gl.VERTEX_SHADER表示顶点着色器，gl.FRAGMENT_SHADER表示片元着色器
 */
gl.createShader(type)
gl.deleteShader(shader)

/**
 * 将source指定的字符串形式的代码传入shader指定的着色器，
 * shader: 作色器对象
 * source: 指定字符串形式的代码
 */
gl.shaderSource(shader, source)

/**
 * 编译shader指定的作色器中的源代码
 */
gl.compileShader(shader)

/**
 * shader: 指定获取参数的着色器
 * pname: 获取参数的类型，gl.SHADER_TYPE, gl.DELETE_STATUS, gl.COMPILE_STATUS
 */
gl.getShaderParameter(shader, pname)

/**
 * 获取shader指定的着色器的信息日志
 */
gl.getShaderInfoLog(shader)

/**
 * 创建程序对象
 */
gl.createProgram()
gl.deleteProgram(program)

/**
 * 将shader指定的着色器对象分配给program指定的程序对象
 * program: 指定程序对象
 * shader: 指定着色器对象
 */
gl.attachShader(program, shader)
gl.detachShader(program, shader)

/**
 * 连接program指定的程序对象中的着色器
 */
gl.linkProgram(program)

/**
 * 检查是否链接成功
 * 获取program指定的程序对象中pname指定的参数信息，返回值随着pname不同而不同
 */
gl.getProgramParameter(program, pname)

// 获取日志
gl.getProgramInfoLog(program)

// 使用program指定的程序对象
gl.useProgram(program)

