import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const PiAPI = () => (
  <Container className="py-3">
    <h1>Pi IO and RESTful API</h1>
    <h3>Using GPIO</h3>
    <ul>
      <li>The GPIO pins use a voltage of 3.3VDC for both input and output.</li>
      <li>
        <a href="https://www.youtube.com/watch?v=NAl-ULEattw">Tutorial Followed</a>
      </li>
      <li>
        <a href="/pdfs/PiAPI_exampleGPIO.pdf">Example wiring (modified from video tutorial)</a>
      </li>
      <li>
        <a href="/images/PiAPI_gpioTesting.py">Example python program</a>
      </li>
    </ul>
    <h3>Light Sensor</h3>
    <ul>
      <li><a href="https://www.amazon.com/dp/B07TGKNDRB/ref=cm_sw_em_r_mt_dp_5YMB0WM1V7T660K93SKN">Light Sensor w/ Relay on Amazon</a></li>
      <li><a href="/pdfs/PiAPI_lightsensorwiring.pdf">Wiring Diagram and Picture</a></li>
      <li>Potentiometer currently set at about 0.6 (0 to 1 range)</li>
      <li>There is a python program on Raspberry PI-07 (the attached PI) named &quot;LightSensor.py&quot; used to test with current setup</li>
    </ul>
    <h3>REST API</h3>
    <ul>
      <li>The idea to connect the light sensor to the SDN controller.</li>
      <li>A RESTful api is basically just a web server with an API (application programming interface) where you can put data to it and get data from it.</li>
      <li>We followed this <a href="https://www.youtube.com/watch?v=GMppyAPbLYk">video</a>. Only up until minute 26:49 is needed.</li>
      <li>An example to set up a REST api that can only respond to get requests is shown below.</li>
    </ul>
    <Row className="justify-content-center">
      <Col lg={4} className="border border-secondary">
        <p className="pt-3">
          from flask import Flask, request <br />
          from flask_restful import Api, Resource <br />
          <br />
          app = Flask(__name__) <br />
          api = Api(app) <br />
          <br />
          class name_of_class(Resource): <br />
          def get(self): <br />
          return &lbrace;&apos;name&apos;:&apos;hello&apos;&rbrace; <br />
          <br />
          api.add_resource(name_of_class, &apos;/&apos;) <br />
          <br />
          if __name__ == &quot;__main__&quot;: <br />
          app.run(host=&apos;10.1.XX.XX&apos;)
        </p>
      </Col>
    </Row>
    <ul>
      <li>I would recommend watching the video for a more in-depth explanation.</li>
      <li>An example that we have used in lab, from Photo pi located at ~/rest_api/rest929.py</li>
    </ul>
    <Row className="justify-content-center">
      <Col lg={4} className="border border-secondary">
        <p className="pt-3">
          from flask import Flask, request <br />
          from flask_restful import Api, Resource <br />
          RPi.GPIO as GPIO <br />
          <br />
          GPIO.setmode(GPIO.BOARD) <br />
          inPin = 11 <br />
          GPIO.setup(inPin, GPIO.IN) <br />
          <br />
          app = Flask(__name__) <br />
          api = Api(app) <br />
          <br />
          <br />
          class Lights(Resource): <br />
          def get(self): <br />
          lights = GPIO.input(inPin) <br />
          return lights <br />
          <br />
          api.add_resource(Lights, &apos;/&apos;) <br />
          <br />
          if __name__ == &quot;__main__&quot;: <br />
          app.run(host=&apos;10.1.88.5&apos;)
        </p>
      </Col>
    </Row>
    <ul>
      <li>To perform a get request, either use a web browser on a device that is connected to the network and go to: http://10.1.88.5:5000/</li>
      <li>Or use a program similar to the example shown below from Photo pi located at ~/rest_api/resttest929.py</li>
    </ul>
    <Row className="justify-content-center">
      <Col lg={4} className="border border-secondary">
        <p className="pt-3">
          import requests <br />
          <br />
          BASE = &apos;http://10.1.88.5:5000/&apos; <br />
          <br />
          response = requests.get(BASE) <br />
          <br />
          print(response.json())
        </p>
      </Col>
    </Row>
  </Container>
);

export default PiAPI;
